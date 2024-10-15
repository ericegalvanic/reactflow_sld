import { nodeClassCode } from './NodeClassCode';
import { nodeClassType, NodeClassType } from './NodeClassType';
import { SubLevelNodeClassCode } from './SubLevelNodeClassCode';

export const subLevelNodeCodeClassMap = {
  [nodeClassCode['AMCB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['CTCR']]: nodeClassType.circuitBreaker,
  [nodeClassCode['ARCB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['GICB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['ICCB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['LVCB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['MCCB-L-LV']]: nodeClassType.circuitBreaker,
  [nodeClassCode['MCCB-S-LV']]: nodeClassType.circuitBreaker,
  [nodeClassCode['OICB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['RCLS']]: nodeClassType.circuitBreaker,
  [nodeClassCode['VCCB']]: nodeClassType.circuitBreaker,
  [nodeClassCode['FUSE-LV']]: nodeClassType.fuse,
  [nodeClassCode['FUSE-MV']]: nodeClassType.fuse,
  [nodeClassCode['BISW-LV']]: nodeClassType.subSwitch,
  [nodeClassCode['BISW-MV']]: nodeClassType.subSwitch,
  [nodeClassCode['BPSW']]: nodeClassType.subSwitch,
  [nodeClassCode['DISC-F-LV']]: nodeClassType.subSwitch,
  [nodeClassCode['DISC-F-MV']]: nodeClassType.subSwitch,
  [nodeClassCode['DISC-LV']]: nodeClassType.subSwitch,
  [nodeClassCode['DISC-MV']]: nodeClassType.subSwitch,
  [nodeClassCode['HPSW']]: nodeClassType.subSwitch,
  [nodeClassCode['LISW']]: nodeClassType.subSwitch,
} as const satisfies Record<SubLevelNodeClassCode, NodeClassType>;
