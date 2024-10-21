import { useState, useCallback, useEffect, useRef } from 'react';
import { useReactFlow, getConnectedEdges, useStore } from '@xyflow/react';
import { Position, RFNode, RFEdge } from '@/common/entities';
import { id } from '@/common/utils';

export const useCopyPaste = <
  TNode extends RFNode = RFNode,
  TEdge extends RFEdge = RFEdge
>() => {
  const mousePosRef = useRef<Position>({ x: 0, y: 0 });
  const rfDomNode = useStore((state) => state.domNode);

  const { getNodes, setNodes, getEdges, setEdges, screenToFlowPosition } =
    useReactFlow<TNode, TEdge>();

  const [bufferedNodes, setBufferedNodes] = useState([] as TNode[]);
  const [bufferedEdges, setBufferedEdges] = useState([] as TEdge[]);

  useEffect(() => {
    const events = ['cut', 'copy', 'paste'];

    if (rfDomNode) {
      const preventDefault = (e: Event) => e.preventDefault();

      const onMouseMove = (event: MouseEvent) => {
        mousePosRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
      };

      for (const event of events) {
        rfDomNode.addEventListener(event, preventDefault);
      }

      rfDomNode.addEventListener('mousemove', onMouseMove);

      return () => {
        for (const event of events) {
          rfDomNode.removeEventListener(event, preventDefault);
        }

        rfDomNode.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [rfDomNode]);

  const copy = useCallback(() => {
    const selectedNodes = getNodes().filter((node) => node.selected);
    const selectedEdges = getConnectedEdges(selectedNodes, getEdges()).filter(
      (edge) => {
        const isExternalSource = selectedNodes.every(
          (n) => n.id !== edge.source
        );
        const isExternalTarget = selectedNodes.every(
          (n) => n.id !== edge.target
        );

        return !(isExternalSource || isExternalTarget);
      }
    );

    setBufferedNodes(selectedNodes);
    setBufferedEdges(selectedEdges);
  }, [getNodes, getEdges]);

  const cut = useCallback(() => {
    const selectedNodes = getNodes().filter((node) => node.selected);
    const selectedEdges = getConnectedEdges(selectedNodes, getEdges()).filter(
      (edge) => {
        const isExternalSource = selectedNodes.every(
          (n) => n.id !== edge.source
        );
        const isExternalTarget = selectedNodes.every(
          (n) => n.id !== edge.target
        );

        return !(isExternalSource || isExternalTarget);
      }
    );

    setBufferedNodes(selectedNodes);
    setBufferedEdges(selectedEdges);

    setNodes((nodes) => nodes.filter((node) => !node.selected));
    setEdges((edges) => edges.filter((edge) => !selectedEdges.includes(edge)));
  }, [getNodes, setNodes, getEdges, setEdges]);

  const paste = useCallback(
    (
      { x: pasteX, y: pasteY } = screenToFlowPosition({
        x: mousePosRef.current.x,
        y: mousePosRef.current.y,
      })
    ) => {
      const minX = Math.min(...bufferedNodes.map((s) => s.position.x));
      const minY = Math.min(...bufferedNodes.map((s) => s.position.y));

      const unique = id();

      const newNodes: TNode[] = bufferedNodes.map((node) => {
        const id = `${node.id}-${unique}`;
        const x = pasteX + (node.position.x - minX);
        const y = pasteY + (node.position.y - minY);

        return { ...node, id, position: { x, y } };
      });

      const newEdges: TEdge[] = bufferedEdges.map((edge) => {
        const id = `${edge.id}-${unique}`;
        const source = `${edge.source}-${unique}`;
        const target = `${edge.target}-${unique}`;

        return { ...edge, id, source, target };
      });

      setNodes((nodes) => [
        ...nodes.map((node) => ({ ...node, selected: false })),
        ...newNodes,
      ]);
      setEdges((edges) => [
        ...edges.map((edge) => ({ ...edge, selected: false })),
        ...newEdges,
      ]);
    },
    [bufferedNodes, bufferedEdges, screenToFlowPosition, setNodes, setEdges]
  );

  return { cut, copy, paste, bufferedNodes, bufferedEdges };
};
