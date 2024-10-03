/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useMemo } from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import { useCopyPaste, useFlowState, useShortcut } from '@/flow/hooks';
import { useHotKey } from '@/common/hooks';
import { flowViewMode, flowEditMode as flowEditMode } from '@/flow/entities';

export const FlowContext = createContext<FlowContextData>({
  nodes: initialNodes,
  edges: initialEdges,
  viewMode: flowViewMode.enhanced,
  editMode: flowEditMode.unlocked,
  changesEnabled: false,
  horizontalHelperLine: undefined,
  verticalHelperLine: undefined,
  setNodes: () => {},
  setEdges: () => {},
  setViewMode: () => {},
  setEditMode: () => {},
  setHorizontalHelperLine: () => {},
  setVerticalHelperLine: () => {},
  onNodesChange: () => {},
  onEdgesChange: () => {},
  takeSnapshot: () => {},
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
    viewModeState: [viewMode, setViewMode],
    editModeState: [editMode, setEditMode],
    horizontalHelperLineState: [horizontalHelperLine, setHorizontalHelperLine],
    verticalHelperLineState: [verticalHelperLine, setVerticalHelperLine],
    history: { undo: prevState, redo: nextState, takeSnapshot },
  } = useFlowState({
    nodes: initialNodes,
    edges: initialEdges,
    viewMode: flowViewMode.enhanced,
    editMode: flowEditMode.unlocked,
    stateId: 'initial-state',
  });

  const { cut, copy, paste } = useCopyPaste();

  const decoratedCut = (...args: Parameters<typeof cut>) => {
    takeSnapshot();
    cut(...args);
  };

  const decoratedPaste = (...args: Parameters<typeof paste>) => {
    takeSnapshot();
    paste(...args);
  };

  useShortcut(['Meta+x', 'Control+x'], decoratedCut);
  useShortcut(['Meta+c', 'Control+c'], copy);
  useShortcut(['Meta+v', 'Control+v'], decoratedPaste);

  useHotKey(['Ctrl', 'Z'], prevState);
  useHotKey(['Ctrl', 'Y'], nextState);

  const changesEnabled = useMemo(
    () => editMode === flowEditMode.unlocked,
    [editMode]
  );

  const providerValue = useMemo(
    (): FlowContextData => ({
      nodes,
      edges,
      viewMode,
      editMode,
      horizontalHelperLine,
      verticalHelperLine,
      setNodes,
      setEdges,
      setViewMode,
      setEditMode,
      setHorizontalHelperLine,
      setVerticalHelperLine,
      onNodesChange,
      onEdgesChange,
      takeSnapshot,
      changesEnabled,
    }),
    [
      nodes,
      edges,
      viewMode,
      editMode,
      horizontalHelperLine,
      verticalHelperLine,
      setNodes,
      setEdges,
      setViewMode,
      setEditMode,
      setHorizontalHelperLine,
      setVerticalHelperLine,
      onNodesChange,
      onEdgesChange,
      takeSnapshot,
      changesEnabled,
    ]
  );

  return (
    <FlowContext.Provider value={providerValue}>
      {children}
    </FlowContext.Provider>
  );
};
