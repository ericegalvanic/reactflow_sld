import { RFNode } from '@/common/entities';
import { useCallback, useState } from 'react';
import { usePaneDrawerContext } from '../context/hooks';

export const useNodeEditDrawer = (
  initialEditNode?: RFNode | (() => RFNode)
) => {
  const [nodeToEdit, setNodeToEdit] = useState(initialEditNode);
  const { openDrawer, ...context } = usePaneDrawerContext();

  const openNodeEditDrawer = useCallback(
    (node: RFNode) => {
      setNodeToEdit(node);
      openDrawer();
    },
    [openDrawer]
  );

  return {
    nodeToEdit,
    setNodeToEdit,
    openDrawer: openNodeEditDrawer,
    ...context,
  };
};
