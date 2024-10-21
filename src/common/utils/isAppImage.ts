import { AppImage } from '../entities';

export const isAppImage = (object: unknown): object is AppImage =>
  !!object &&
  typeof object === 'object' &&
  'src' in object &&
  'alt' in object &&
  'width' in object &&
  'height' in object &&
  typeof object.width === 'number' &&
  typeof object.height === 'number' &&
  typeof object.src === 'string' &&
  typeof object.alt === 'string';
