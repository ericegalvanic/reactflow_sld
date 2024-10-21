import { heterogenousNodeClass, HeterogenousNodeClass } from '@/flow/entities';

export const isTextAssetClass = (
  nodeClass: HeterogenousNodeClass
): nodeClass is 'TEXT_ASSET' => nodeClass === heterogenousNodeClass.textAsset;
