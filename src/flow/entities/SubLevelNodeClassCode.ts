import { ExhaustiveArray, StrictExtract } from '@/common/types';
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
  | 'SUB_BISW-LV'
  | 'SUB_BISW-MV'
  | 'SUB_BPSW'
  | 'SUB_DISC-F-LV'
  | 'SUB_DISC-F-MV'
  | 'SUB_DISC-LV'
  | 'SUB_DISC-MV'
  | 'SUB_HPSW'
  | 'SUB_LISW'
>;

export const subLevelNodeClasses: ExhaustiveArray<SubLevelNodeClassCode> = [
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
  nodeClassCode['SUB_BISW-LV'],
  nodeClassCode['SUB_BISW-MV'],
  nodeClassCode['SUB_BPSW'],
  nodeClassCode['SUB_DISC-F-LV'],
  nodeClassCode['SUB_DISC-F-MV'],
  nodeClassCode['SUB_DISC-LV'],
  nodeClassCode['SUB_DISC-MV'],
  nodeClassCode['SUB_HPSW'],
  nodeClassCode['SUB_LISW'],
];
