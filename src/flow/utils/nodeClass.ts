import { HeterogenousNodeClass, heterogenousNodeClass } from '@/flow/entities';
import { RFNode } from '../../common/entities';
import { hasClassType } from './hasClassType';
import { isAppImage } from '../../common/utils/isAppImage';

export const nodeClass = (node: RFNode): HeterogenousNodeClass =>
  'image' in node.data && isAppImage(node.data['image']) && hasClassType(node)
    ? node.data.class
    : heterogenousNodeClass.textAsset;
