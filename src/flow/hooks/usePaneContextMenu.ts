import { Nullable, SetState } from '@/common/types';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import { ElementRef, RefObject, useCallback } from 'react';
import { PaneContextMenu } from '../entities';
import { getMenuPositionFromEventAndDom, getNodePositionFromEvent } from '../utils';

type OnContextMenuParams = Parameters<
  NonNullable<ReactFlowProps['onContextMenu']>
>;

export const usePaneContextMenu = (
  flowRef: RefObject<ElementRef<typeof ReactFlow>>,
  setMenu: SetState<Nullable<PaneContextMenu>>
) => {
  const openMenu = useCallback(
    (event: OnContextMenuParams[0]) => {
      event.preventDefault();

      const pane = flowRef!.current!.getBoundingClientRect();
      setMenu({
        ...getMenuPositionFromEventAndDom(event, pane),
        position: getNodePositionFromEvent(event),
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setMenu]
  );

  const closeMenu = useCallback(() => setMenu(null), [setMenu]);

  return { openMenu, closeMenu };
};
