import { RFEdge, RFNode } from '@/common/entities';
import { useCallback, useMemo, useState } from 'react';
import {
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
} from '@xyflow/react';
import { SetState } from '@/common/types';
import { edge, id, isSubNode } from '@/common/utils';
import { helperLines as getHelperLines } from '../utils';
import { FlowEditMode, flowViewMode, FlowViewMode } from '../entities';
import { useUndoRedo } from './useUndoRedo';

export type FlowState = {
  nodes: RFNode[];
  edges: RFEdge[];
  viewMode: FlowViewMode;
  editMode: FlowEditMode;
  stateId: string;
};

export const useFlowState = (initialState: FlowState) => {
  const [state, setState] = useState(initialState);

  const [helperLineHorizontal, setHelperLineHorizontal] = useState<
    number | undefined
  >(undefined);
  const [helperLineVertical, setHelperLineVertical] = useState<
    number | undefined
  >(undefined);

  const history = useUndoRedo();

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

  const setEditMode: SetState<FlowEditMode> = useCallback(
    (editMode) => {
      decoratedSetState((previous) => {
        if (typeof editMode !== 'function') {
          return {
            ...previous,
            editMode,
          };
        }

        return {
          ...previous,
          editMode: editMode(previous.editMode),
        };
      });
    },
    [decoratedSetState]
  );

  const applyNodeChangesWithHelperLines = useCallback(
    (changes: NodeChange[], nodes: RFNode[]): RFNode[] => {
      // reset the helper lines (clear existing lines, if any)
      setHelperLineHorizontal(undefined);
      setHelperLineVertical(undefined);

      // this will be true if it's a single node being dragged
      // inside we calculate the helper lines and snap position for the position where the node is being moved to
      if (
        changes.length === 1 &&
        changes[0] &&
        changes[0].type === 'position' &&
        changes[0].dragging &&
        changes[0].position
      ) {
        const helperLines = getHelperLines(changes[0], nodes);

        // if we have a helper line, we snap the node to the helper line position
        // this is being done by manipulating the node position inside the change object
        changes[0].position.x =
          helperLines.snapPosition.x ?? changes[0].position.x;
        changes[0].position.y =
          helperLines.snapPosition.y ?? changes[0].position.y;

        // if helper lines are returned, we set them so that they can be displayed
        setHelperLineHorizontal(helperLines.horizontal);
        setHelperLineVertical(helperLines.vertical);
      }

      return applyNodeChanges(changes, nodes) as unknown as RFNode[];
    },
    []
  );

  const onNodesChange = useCallback(
    (changes: NodeChange<RFNode>[]) => {
      decoratedSetState((prev) => ({
        ...prev,
        nodes: applyNodeChangesWithHelperLines(changes, prev.nodes),
      }));
    },
    [applyNodeChangesWithHelperLines, decoratedSetState]
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
    editModeState: [state.editMode, setEditMode],
    horizontalHelperLineState: [helperLineHorizontal, setHelperLineHorizontal],
    verticalHelperLineState: [helperLineVertical, setHelperLineVertical],
    history,
  } as const;
};
