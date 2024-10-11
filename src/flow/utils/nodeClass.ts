import {
  HeterogenousNodeClass,
  heterogenousNodeClass,
  nodeTypeNodeClassMap,
} from '@/flow/entities';
import { RFNode } from '../../common/entities';
import { hasExplicitClassType } from './hasExplicitClassType';
import { hasImplicitClassType } from './hasImplicitClassType';

export const nodeClass = (node: RFNode): HeterogenousNodeClass =>
  hasExplicitClassType(node)
    ? node.data.class
    : hasImplicitClassType(node)
    ? nodeTypeNodeClassMap[node.type]
    : heterogenousNodeClass.textAsset;
