import {
  HeterogenousNodeClass,
  ImplicitNodeClass,
  nodeClassNodeTypeMap,
} from '../entities';

export const isImplicitClassType = (
  nodeClass: HeterogenousNodeClass
): nodeClass is ImplicitNodeClass =>
  !!nodeClassNodeTypeMap[nodeClass as ImplicitNodeClass];
