import { useCallback, useState } from 'react';
import { useReactFlow } from '@xyflow/react';
import { RFEdge, RFNode } from '@/common/entities';

type UseUndoRedoOptions = {
  maxHistorySize: number;
};

export type FlowState = {
  nodes: RFNode[];
  edges: RFEdge[];
};

type UseUndoRedo = (options?: UseUndoRedoOptions) => FlowState & {
  undo: () => void;
  redo: () => void;
  takeSnapshot: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

type HistoryItem = {
  nodes: RFNode[];
  edges: RFEdge[];
};

const defaultOptions: UseUndoRedoOptions = {
  maxHistorySize: 100,
};

export const useUndoRedo: UseUndoRedo = ({
  maxHistorySize = defaultOptions.maxHistorySize,
} = defaultOptions) => {
  const [past, setPast] = useState<HistoryItem[]>([]);
  const [future, setFuture] = useState<HistoryItem[]>([]);

  const { setNodes, setEdges, getNodes, getEdges } = useReactFlow<
    RFNode,
    RFEdge
  >();

  const takeSnapshot = useCallback(() => {
    setPast((past) => [
      ...past.slice(past.length - maxHistorySize + 1, past.length),
      { nodes: getNodes(), edges: getEdges() },
    ]);

    setFuture([]);
  }, [getNodes, getEdges, maxHistorySize]);

  const undo = useCallback(() => {
    const pastState = past[past.length - 1];

    if (pastState) {
      setPast((past) => past.slice(0, past.length - 1));
      setFuture((future) => [
        ...future,
        { nodes: getNodes(), edges: getEdges() },
      ]);
      setNodes(pastState.nodes);
      setEdges(pastState.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, past]);

  const redo = useCallback(() => {
    const futureState = future[future.length - 1];

    if (futureState) {
      setFuture((future) => future.slice(0, future.length - 1));
      setPast((past) => [...past, { nodes: getNodes(), edges: getEdges() }]);
      setNodes(futureState.nodes);
      setEdges(futureState.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, future]);

  const nodes = getNodes();
  const edges = getEdges();

  return {
    nodes,
    edges,
    undo,
    redo,
    takeSnapshot,
    canUndo: !past.length,
    canRedo: !future.length,
  };
};

export default useUndoRedo;
