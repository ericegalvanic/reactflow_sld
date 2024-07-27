import { SetState } from '@/common/types';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import { ElementRef, RefObject, useCallback } from 'react';
import { ContextMenu } from '../entities';
import { getNodePositionFromEvent } from '../utils';

type OnNodeContextMenuParameters = Parameters<
  NonNullable<ReactFlowProps['onContextMenu']>
>;

export const usePaneContextMenu = (
  flowRef: RefObject<ElementRef<typeof ReactFlow>>,
  setMenu: SetState<ContextMenu | null>
) => {
  const openMenu = useCallback(
    (event: OnNodeContextMenuParameters[0]) => {
      event.preventDefault();

      const pane = flowRef!.current!.getBoundingClientRect();
      setMenu({
        top: event.clientY < pane.height - 200 ? event.clientY : undefined,
        left: event.clientX < pane.width - 200 ? event.clientX : undefined,
        right:
          event.clientX >= pane.width - 200
            ? pane.width - event.clientX
            : undefined,
        bottom:
          event.clientY >= pane.height - 200
            ? pane.height - event.clientY
            : undefined,
        position: getNodePositionFromEvent(event),
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setMenu]
  );

  const closeMenu = useCallback(() => setMenu(null), [setMenu]);

  return { openMenu, closeMenu };
};
