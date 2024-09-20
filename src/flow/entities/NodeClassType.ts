import { ObjectValues } from '@/common/types';

export const nodeClassType = {
  circuitBreaker: 'CIRCUIT_BREAKER',
  electricalPanel: 'ELECTRICAL_PANEL',
  fuse: 'FUSE',
  generator: 'GENERATOR',
  groundFaultSystem: 'GROUND_FAULT_SYSTEM',
  groundingOrBonding: 'GROUNDING_OR_BONDING',
  instrumentTransformer: 'INSTRUMENT_TRANSFORMER',
  meter: 'METER',
  misc: 'MISC',
  motor: 'MOTOR',
  relay: 'RELAY',
  switch: 'SWITCH',
  transferSwitch: 'TRANSFER_SWITCH',
  transformer: 'TRANSFORMER',
  upsSystem: 'UPS_SYSTEM',
} as const satisfies Record<string, string>;

export type NodeClassType = ObjectValues<typeof nodeClassType>;
