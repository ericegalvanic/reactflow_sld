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
  [nodeClassCode['BISW-LV']]: nodeClassType.switch,
  [nodeClassCode['BISW-MV']]: nodeClassType.switch,
  [nodeClassCode['BPSW']]: nodeClassType.switch,
  [nodeClassCode['DISC-F-LV']]: nodeClassType.switch,
  [nodeClassCode['DISC-F-MV']]: nodeClassType.switch,
  [nodeClassCode['DISC-LV']]: nodeClassType.switch,
  [nodeClassCode['DISC-MV']]: nodeClassType.switch,
  [nodeClassCode['HPSW']]: nodeClassType.switch,
  [nodeClassCode['LISW']]: nodeClassType.switch,
} as const satisfies Record<SubLevelNodeClassCode, NodeClassType>;
