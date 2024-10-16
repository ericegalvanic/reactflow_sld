import { ExhaustiveArray, ObjectValues } from '@/common/types';

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
  subSwitch: 'SUB_SWITCH',
  transferSwitch: 'TRANSFER_SWITCH',
  transformer: 'TRANSFORMER',
  upsSystem: 'UPS_SYSTEM',
  capacitor: 'CAPACITOR',
} as const satisfies Record<string, string>;

export type NodeClassType = ObjectValues<typeof nodeClassType>;

export const nodeClassTypeNameMap: Record<NodeClassType, string> = {
  [nodeClassType.circuitBreaker]: 'Circuit Breaker',
  [nodeClassType.electricalPanel]: 'Electrical Panel',
  [nodeClassType.fuse]: 'Fuse',
  [nodeClassType.generator]: 'Generator',
  [nodeClassType.groundFaultSystem]: 'Ground Fault System',
  [nodeClassType.groundingOrBonding]: 'Grounding or Bonding',
  [nodeClassType.instrumentTransformer]: 'Instrument Transformer',
  [nodeClassType.meter]: 'Meter',
  [nodeClassType.misc]: 'Misc',
  [nodeClassType.motor]: 'Motor',
  [nodeClassType.relay]: 'Relay',
  [nodeClassType.switch]: 'Switch',
  [nodeClassType.subSwitch]: 'Switch',
  [nodeClassType.transferSwitch]: 'Transfer Switch',
  [nodeClassType.transformer]: 'Transformer',
  [nodeClassType.upsSystem]: 'UPS System',
  [nodeClassType.capacitor]: 'Capacitor',
};

export const nodeClassTypeShortNameMap: Record<NodeClassType, string> = {
  [nodeClassType.circuitBreaker]: 'CIRCUIT_BREAKER',
  [nodeClassType.electricalPanel]: 'ELECTRICAL_PANEL',
  [nodeClassType.fuse]: 'FUSE',
  [nodeClassType.generator]: 'GENERATOR',
  [nodeClassType.groundFaultSystem]: 'GROUND_FAULT_SYSTEM',
  [nodeClassType.groundingOrBonding]: 'GROUNDING_OR_BONDING',
  [nodeClassType.instrumentTransformer]: 'INSTRUMENT_TRANSFORMER',
  [nodeClassType.meter]: 'METER',
  [nodeClassType.misc]: 'MISC',
  [nodeClassType.motor]: 'MOTOR',
  [nodeClassType.relay]: 'RELAY',
  [nodeClassType.switch]: 'SWITCH',
  [nodeClassType.subSwitch]: 'SWITCH',
  [nodeClassType.transferSwitch]: 'TRANSFER_SWITCH',
  [nodeClassType.transformer]: 'TRANSFORMER',
  [nodeClassType.upsSystem]: 'UPS_SYSTEM',
  [nodeClassType.capacitor]: 'CAPACITOR',
};


export const nodeClassTypes: ExhaustiveArray<NodeClassType> = [
  nodeClassType.circuitBreaker,
  nodeClassType.electricalPanel,
  nodeClassType.fuse,
  nodeClassType.generator,
  nodeClassType.groundFaultSystem,
  nodeClassType.groundingOrBonding,
  nodeClassType.instrumentTransformer,
  nodeClassType.meter,
  nodeClassType.misc,
  nodeClassType.motor,
  nodeClassType.relay,
  nodeClassType.switch,
  nodeClassType.subSwitch,
  nodeClassType.transferSwitch,
  nodeClassType.transformer,
  nodeClassType.upsSystem,
  nodeClassType.capacitor,
];
