import { StrictExtract } from '@/common/types';
import { NodeClassCode } from './NodeClassCode';

export type SubLevelNodeClassCode = StrictExtract<
  NodeClassCode,
  | 'LVCB'
  | 'MCCB-S-LV'
  | 'MCCB-L-LV'
  | 'ARCB'
  | 'OICB'
  | 'VCCB'
  | 'GICB'
  | 'AMCB'
  | 'CTCR'
  | 'ICCB'
  | 'RCLS'
  | 'FUSE-LV'
  | 'FUSE-MV'
  | 'BISW-LV'
  | 'BISW-MV'
  | 'BPSW'
  | 'DISC-F-LV'
  | 'DISC-F-MV'
  | 'DISC-LV'
  | 'DISC-MV'
  | 'HPSW'
  | 'LISW'
>;
