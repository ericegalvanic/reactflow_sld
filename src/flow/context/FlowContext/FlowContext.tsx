import { createContext, ReactNode, useMemo } from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import { useFlowState } from '@/flow/hooks';
import { useHotKey } from '@/common/hooks';

export const FlowContext = createContext<FlowContextData>({
  nodes: initialNodes,
  edges: initialEdges,
  setNodes: () => {},
  setEdges: () => {},
  onNodesChange: () => {},
  onEdgesChange: () => {},
});

export type FlowContextProviderProps = {
  children: ReactNode;
};

export const FlowContextProvider: React.FC<FlowContextProviderProps> = ({
  children,
}) => {
  const {
    nodeState: [nodes, setNodes, onNodesChange],
    edgeState: [edges, setEdges, onEdgesChange],
    history: { back: prevState, forward: nextState },
  } = useFlowState({
    nodes: initialNodes,
    edges: initialEdges,
    stateId: 'initial-state',
  });

  console.log('HISTORY', history);
  console.log('NODES: ', nodes);
  console.log('EDGES', edges);

  useHotKey(['Ctrl', 'Z'], prevState);
  useHotKey(['Ctrl', 'Y'], nextState);

  const providerValue = useMemo(
    (): FlowContextData => ({
      nodes,
      edges,
      setNodes,
      setEdges,
      onNodesChange,
      onEdgesChange,
    }),
    [edges, nodes, onEdgesChange, onNodesChange, setEdges, setNodes]
  );

  return (
    <FlowContext.Provider value={providerValue}>
      {children}
    </FlowContext.Provider>
  );
};
