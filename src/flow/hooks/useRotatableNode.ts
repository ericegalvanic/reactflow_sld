import { useEffect, useMemo, useRef, useState } from 'react';
import { useUpdateNodeInternals } from './useUpdateNodeInternals';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';
import { useNode } from './useNode';
import { nodeRotation } from '../utils';

export type UseRotatableNodeNamedParams = {
  resizable?: boolean;
  rotatable?: boolean;
};

export const useRotatableNode = (
  nodeId: string,
  namedParams: UseRotatableNodeNamedParams = {
    resizable: true,
    rotatable: true,
  }
) => {
  const rotateControlRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const { node, updateNode } = useNode(nodeId);
  const loadedRotation = useMemo(
    () => (node ? nodeRotation(node) ?? 0 : 0),
    [node]
  );
  const [rotation, setRotation] = useState(loadedRotation);
  const [resizable, setResizable] = useState(!!namedParams.resizable);
  const [rotatable, setRotatable] = useState(!!namedParams.rotatable);

  useEffect(() => {
    setRotatable(!!namedParams.rotatable);
  }, [namedParams]);

  useEffect(() => {
    setResizable(!!namedParams.resizable);
  }, [namedParams]);

  useEffect(() => {
    setRotation(loadedRotation);
  }, [loadedRotation]);

  useEffect(() => {
    if (!rotateControlRef.current) {
      return;
    }

    const selection = select(rotateControlRef.current);
    const dragHandler = drag().on('drag', (evt) => {
      const dx = evt.x - 100;
      const dy = evt.y - 100;
      const rad = Math.atan2(dx, dy);
      const deg = rad * (180 / Math.PI);
      setRotation(180 - deg);
      updateNodeInternals(nodeId);
      updateNode?.({
        ...node,
        data: {
          ...node.data,
          rotation: 180 - deg,
        },
      });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selection.call(dragHandler as any);
  }, [node, nodeId, updateNode, updateNodeInternals]);

  return {
    rotation,
    setRotation,
    resizable,
    setResizable,
    rotatable,
    setRotatable,
    rotateControlRef,
    updateNodeInternals,
  };
};
