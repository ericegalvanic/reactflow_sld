import { createContext, ReactNode, useMemo } from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import { useEdgesState, useNodesState } from '@/flow/hooks';

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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
