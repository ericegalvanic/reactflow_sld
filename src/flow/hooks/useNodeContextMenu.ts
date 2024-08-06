import { Nullable, SetState } from '@/common/types';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import { ElementRef, RefObject, useCallback } from 'react';
import { NodeContextMenu } from '../entities';
import { getMenuPositionFromEventAndDom, getNodePositionFromEvent } from '../utils';

type OnNodeContextMenuParams = Parameters<
  NonNullable<ReactFlowProps['onNodeContextMenu']>
>;

export const useNodeContextMenu = (
  flowRef: RefObject<ElementRef<typeof ReactFlow>>,
  setMenu: SetState<Nullable<NodeContextMenu>>
) => {
  const openMenu = useCallback(
    (event: OnNodeContextMenuParams[0], node: OnNodeContextMenuParams[1]) => {
      event.preventDefault();
      event.stopPropagation();

      const pane = flowRef!.current!.getBoundingClientRect();
      setMenu({
        id: node.id,
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
