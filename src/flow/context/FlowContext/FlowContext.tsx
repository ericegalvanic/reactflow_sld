import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import { useFlowState } from '@/flow/hooks';
import { useHotKey } from '@/common/hooks';
import dagre from '@dagrejs/dagre';
import { RFEdge, RFNode } from '@/common/entities';
import { Position } from '@xyflow/react';
import { FlowDirection } from '@/flow/entities';

export const FlowContext = createContext<FlowContextData>({
  nodes: initialNodes,
  edges: initialEdges,
  flowDirection: 'TB',
  setNodes: () => {},
  setEdges: () => {},
  setFlowDirection: () => {},
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onLayout: () => {},
});

export type FlowContextProviderProps = {
  children: ReactNode;
};

const nodeWidthPx = 194;
const nodeHeightPx = 56;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (
  nodes: RFNode[],
  edges: RFEdge[],
  direction: FlowDirection = 'TB'
) => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidthPx, height: nodeHeightPx });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: (isHorizontal ? 'left' : 'top') as Position,
      sourcePosition: (isHorizontal ? 'right' : 'bottom') as Position,
      position: {
        x: nodeWithPosition.x - nodeWidthPx / 2,
        y: nodeWithPosition.y - nodeHeightPx / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
  'TB'
);

export const FlowContextProvider: React.FC<FlowContextProviderProps> = ({
  children,
}) => {
  const {
    nodeState: [nodes, setNodes, onNodesChange],
    edgeState: [edges, setEdges, onEdgesChange],
    history: { back: prevState, forward: nextState },
  } = useFlowState({
    nodes: layoutedNodes,
    edges: layoutedEdges,
    stateId: 'initial-state',
  });
  const [flowDirection, setFlowDirection] = useState<FlowDirection>('TB');

  const onLayout = useCallback(
    (direction: FlowDirection) => {
      setFlowDirection(direction);
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setNodes, setEdges]
  );

  useHotKey(['Ctrl', 'Z'], prevState);
  useHotKey(['Ctrl', 'Y'], nextState);

  const providerValue = useMemo(
    (): FlowContextData => ({
      nodes,
      edges,
      flowDirection,
      setNodes,
      setEdges,
      setFlowDirection,
      onNodesChange,
      onEdgesChange,
      onLayout,
    }),
    [
      nodes,
      edges,
      flowDirection,
      setNodes,
      setEdges,
      onNodesChange,
      onEdgesChange,
      onLayout,
    ]
  );

  return (
    <FlowContext.Provider value={providerValue}>
      {children}
    </FlowContext.Provider>
  );
};
