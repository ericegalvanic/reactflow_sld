import { ObjectValues } from '@/common/types';
import {
  nodeClassType,
  nodeClassTypeNameMap,
  nodeClassTypes,
} from './NodeClassType';

export const heterogenousNodeClass = {
  ...nodeClassType,
  textAsset: 'TEXT_ASSET',
} as const satisfies Record<string, string>;

export type HeterogenousNodeClass = ObjectValues<typeof heterogenousNodeClass>;

export const heterogenousNodeClassNameMap: Record<HeterogenousNodeClass, string> = {
  ...nodeClassTypeNameMap,
  TEXT_ASSET: 'Text Asset',
};

export const heterogenousNodeClasses: HeterogenousNodeClass[] = [
  ...nodeClassTypes,
  heterogenousNodeClass.textAsset,
];
