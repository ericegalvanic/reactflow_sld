import { RFNode } from '@/common/entities';
import { useCallback, useEffect, useState } from 'react';
import { usePaneDrawerContext } from '../context/hooks';
import { assertImperatively } from '@/common/utils';

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

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const element = event.target;

      if (!element) {
        return;
      }

      assertImperatively<HTMLDivElement>(element);

      if (element.classList.contains('MuiBackdrop-root')) {
        context.closeDrawer();
      }
    };

    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [context]);

  return {
    nodeToEdit,
    setNodeToEdit,
    openDrawer: openNodeEditDrawer,
    ...context,
  };
};
