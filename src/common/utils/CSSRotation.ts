import { CSSFunction } from '../entities';

export const CSSRotation = ((rotation: number) => ({
  transform: `rotate(${rotation}deg)`,
})) satisfies CSSFunction;
