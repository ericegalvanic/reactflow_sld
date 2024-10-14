import { StrictExtract } from '@/common/types';
import { nodeClassCode, NodeClassCode } from './NodeClassCode';

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

export const subLevelNodeClasses = [
  nodeClassCode['AMCB'],
  nodeClassCode['CTCR'],
  nodeClassCode['ARCB'],
  nodeClassCode['GICB'],
  nodeClassCode['ICCB'],
  nodeClassCode['LVCB'],
  nodeClassCode['MCCB-L-LV'],
  nodeClassCode['MCCB-S-LV'],
  nodeClassCode['OICB'],
  nodeClassCode['RCLS'],
  nodeClassCode['VCCB'],
  nodeClassCode['FUSE-LV'],
  nodeClassCode['FUSE-MV'],
  nodeClassCode['BISW-LV'],
  nodeClassCode['BISW-MV'],
  nodeClassCode['BPSW'],
  nodeClassCode['DISC-F-LV'],
  nodeClassCode['DISC-F-MV'],
  nodeClassCode['DISC-LV'],
  nodeClassCode['DISC-MV'],
  nodeClassCode['HPSW'],
  nodeClassCode['LISW'],
];
