import { CSSPosition } from '@/common/entities';

export const getMenuPositionFromEventAndDom = (
  event: { clientX: number; clientY: number },
  rect: DOMRect
): CSSPosition => ({
  top: event.clientY < rect.height - 200 ? event.clientY : undefined,
  left: event.clientX < rect.width - 200 ? event.clientX : undefined,
  right:
    event.clientX >= rect.width - 200 ? rect.width - event.clientX : undefined,
  bottom:
    event.clientY >= rect.height - 200
      ? rect.height - event.clientY
      : undefined,
});
