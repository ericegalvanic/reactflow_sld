import { Nullable, SetState } from '@/common/types';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import { ElementRef, RefObject, useCallback } from 'react';
import { NodeContextMenu as EdgeContextMenu } from '../entities';
import {
  getMenuPositionFromEventAndDom,
  getNodePositionFromEvent,
} from '../utils';

type OnEdgeContextMenuParams = Parameters<
  NonNullable<ReactFlowProps['onEdgeContextMenu']>
>;

export const useEdgeContextMenu = (
  flowRef: RefObject<ElementRef<typeof ReactFlow>>,
  setMenu: SetState<Nullable<EdgeContextMenu>>
) => {
  const openMenu = useCallback(
    (event: OnEdgeContextMenuParams[0], edge: OnEdgeContextMenuParams[1]) => {
      event.preventDefault();
      event.stopPropagation();

      const pane = flowRef!.current!.getBoundingClientRect();
      setMenu({
        id: edge.id,
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
