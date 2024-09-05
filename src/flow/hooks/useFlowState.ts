import { RFEdge, RFNode } from '@/common/entities';
import { useStateWithHistory } from './useStateWithHistory';
import { useCallback, useMemo } from 'react';
import {
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
} from '@xyflow/react';
import { SetState } from '@/common/types';
import { edge, id, isSubNode } from '@/common/utils';
import { flowViewMode, FlowViewMode } from '../entities';

export type FlowState = {
  nodes: RFNode[];
  edges: RFEdge[];
  viewMode: FlowViewMode;
  stateId: string;
};

export const useFlowState = (initialState: FlowState) => {
  const [state, setState, history] = useStateWithHistory(initialState);
  // const [viewMode, setViewMode] = useState<FlowViewMode>(flowViewMode.enhanced);

  const decoratedSetState: SetState<Omit<FlowState, 'stateId'>> = useCallback(
    (newState) => {
      setState((prevState: FlowState) => {
        if (typeof newState !== 'function') {
          return {
            ...newState,
            stateId: id(),
          };
        }

        return {
          ...newState(prevState),
          stateId: id(),
        };
      });
    },
    [setState]
  );

  const setNodes: SetState<RFNode[]> = useCallback(
    (nodes) => {
      decoratedSetState((previous) => {
        if (typeof nodes !== 'function') {
          return {
            ...previous,
            nodes,
          };
        }

        return {
          ...previous,
          nodes: nodes(previous.nodes),
        };
      });
    },
    [decoratedSetState]
  );

  const setEdges: SetState<RFEdge[]> = useCallback(
    (edges) => {
      decoratedSetState((previous) => {
        if (typeof edges !== 'function') {
          return {
            ...previous,
            edges,
          };
        }

        return {
          ...previous,
          edges: edges(previous.edges),
        };
      });
    },
    [decoratedSetState]
  );

  const setViewMode: SetState<FlowViewMode> = useCallback(
    (flowMode) => {
      decoratedSetState((previous) => {
        if (typeof flowMode !== 'function') {
          return {
            ...previous,
            viewMode: flowMode,
          };
        }

        return {
          ...previous,
          viewMode: flowMode(previous.viewMode),
        };
      });
    },
    [decoratedSetState]
  );

  const onNodesChange = useCallback(
    (changes: NodeChange<RFNode>[]) => {
      decoratedSetState((prev) => ({
        ...prev,
        nodes: applyNodeChanges(changes, prev.nodes),
      }));
    },
    [decoratedSetState]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<RFEdge>[]) => {
      decoratedSetState((prev) => ({
        ...prev,
        edges: applyEdgeChanges(changes, prev.edges).map(edge),
      }));
    },
    [decoratedSetState]
  );

  const viewModeNodes = useMemo(() => {
    if (state.viewMode === flowViewMode.enhanced) {
      return state.nodes;
    }

    return state.nodes.filter((node) => !isSubNode(node));
  }, [state]);

  return {
    nodeState: [viewModeNodes, setNodes, onNodesChange],
    edgeState: [state.edges, setEdges, onEdgesChange],
    viewModeState: [state.viewMode, setViewMode],
    history,
  } as const;
};
