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
