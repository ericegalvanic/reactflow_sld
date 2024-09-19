/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { FlowContextData } from './FlowContext.entities';
import { initialNodes, initialEdges } from './FlowContext.data';
import { useCopyPaste, useFlowState, useShortcut } from '@/flow/hooks';
import { useHotKey } from '@/common/hooks';
import dagre from '@dagrejs/dagre';
import { RFEdge, RFNode } from '@/common/entities';
import { Position } from '@xyflow/react';
import {
  flowDirection as flowDirectionEnum,
  FlowDirection,
  flowViewMode,
  flowEditMode as flowEditMode,
} from '@/flow/entities';

export const FlowContext = createContext<FlowContextData>({
  nodes: initialNodes,
  edges: initialEdges,
  flowDirection: flowDirectionEnum.vertical,
  viewMode: flowViewMode.enhanced,
  editMode: flowEditMode.unlocked,
  changesEnabled: false,
  horizontalHelperLine: undefined,
  verticalHelperLine: undefined,
  setNodes: () => {},
  setEdges: () => {},
  setFlowDirection: () => {},
  setViewMode: () => {},
  setEditMode: () => {},
  setHorizontalHelperLine: () => {},
  setVerticalHelperLine: () => {},
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onLayout: () => {},
  takeSnapshot: () => {},
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
  direction: FlowDirection = flowDirectionEnum.vertical
) => {
  const isHorizontal = direction === flowDirectionEnum.horizontal;
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
  flowDirectionEnum.vertical
);

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
    nodes: layoutedNodes,
    edges: layoutedEdges,
    viewMode: flowViewMode.enhanced,
    editMode: flowEditMode.unlocked,
    stateId: 'initial-state',
  });
  const [flowDirection, setFlowDirection] = useState<FlowDirection>(
    flowDirectionEnum.vertical
  );

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

  const changesEnabled = useMemo(
    () => editMode === flowEditMode.unlocked,
    [editMode]
  );

  const providerValue = useMemo(
    (): FlowContextData => ({
      nodes,
      edges,
      flowDirection,
      viewMode,
      editMode,
      horizontalHelperLine,
      verticalHelperLine,
      setNodes,
      setEdges,
      setFlowDirection,
      setViewMode,
      setEditMode,
      setHorizontalHelperLine,
      setVerticalHelperLine,
      onNodesChange,
      onEdgesChange,
      onLayout,
      takeSnapshot,
      changesEnabled,
    }),
    [
      nodes,
      edges,
      flowDirection,
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
      onLayout,
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
