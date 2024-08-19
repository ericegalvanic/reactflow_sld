import { createContext, ReactNode, useCallback, useMemo } from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import {
  useEdgesStateWithHistory,
  useNodesStateWithHistory,
} from '@/flow/hooks';
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
  const [
    nodes,
    setNodes,
    onNodesChange,
    { back: prevNodeState, forward: nextNodeState, history: nodesHistory },
  ] = useNodesStateWithHistory(initialNodes);
  const [
    edges,
    setEdges,
    onEdgesChange,
    { back: prevEdgeState, forward: nextEdgeState, history: edgesHistory },
  ] = useEdgesStateWithHistory(initialEdges);

  const history = {
    nodesHistory,
    edgesHistory,
  };

  console.log(history);

  const nextState = useCallback(() => {
    nextNodeState();
    nextEdgeState();
  }, [nextEdgeState, nextNodeState]);

  const prevState = useCallback(() => {
    console.log('here');
    prevNodeState();
    prevEdgeState();
  }, [prevEdgeState, prevNodeState]);

  useHotKey(['Ctrl', 'Z'], prevState);
  useHotKey(['Ctrl', 'Y'], nextState);
  useHotKey(['Meta', 'Shift', 'Z'], nextState);

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
