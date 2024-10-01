import { useNodeHandlePosition, useRotatableNode } from '@/flow/hooks';
import { SetState } from '../types';
import { MouseEventHandler } from 'react';
import { PopupAnchor } from './PopupAnchor';

export type NodeComponentProps<P extends Record<string, unknown> = {}> =
  ReturnType<typeof useNodeHandlePosition> &
    ReturnType<typeof useRotatableNode> & {
      parentRotation: number | undefined;
      showPopup: boolean;
      setShowPopup: SetState<boolean>;
      popupAnchor: PopupAnchor;
      setPopupAnchor: SetState<PopupAnchor>;
      handleNodeBaseHover: MouseEventHandler<HTMLElement>;
      handleNodeBaseMouseLeave: MouseEventHandler<HTMLElement>;
    } & P;
