import { HeterogenousNodeClass, heterogenousNodeClass } from '@/flow/entities';
import { RFNode } from '../entities';
import { hasClassType } from './hasClassType';
import { isAppImage } from './isAppImage';

export const nodeClass = (node: RFNode): HeterogenousNodeClass =>
  'image' in node.data &&
  isAppImage(node.data['image']) &&
  node.data &&
  hasClassType(node)
    ? node.data.class
    : heterogenousNodeClass.textAsset;
