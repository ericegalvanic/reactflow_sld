import { useEffect, useRef } from 'react';
import { PopupAnchor } from '../entities';
import { SetState } from '../types';

export const usePopupAnchor = <E extends HTMLElement = HTMLElement>(
  setPopupAnchor: SetState<PopupAnchor>
) => {
  const nodeBaseRef = useRef<E>(null);

  useEffect(() => {
    if (!nodeBaseRef.current) {
      return;
    }

    setPopupAnchor(nodeBaseRef.current);
  }, [setPopupAnchor]);

  return nodeBaseRef;
};
