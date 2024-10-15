import { reverseObjectEntries } from '@/common/utils';
import { nodeClassType, NodeClassType } from './NodeClassType';
import { NodeTypeWithImplicitClass } from './NodeTypeWithImplicitClass';

export const nodeTypeNodeClassMap = {
  CapacitorNode: nodeClassType.capacitor,
  ElectricalPanelNode: nodeClassType.electricalPanel,
  SwitchNode: nodeClassType.switch,
  TransferSwitchNode: nodeClassType.transferSwitch,
  TransformerNode: nodeClassType.transformer,
  MiscNode: nodeClassType.misc,
  MotorNode: nodeClassType.motor,
  GeneratorNode: nodeClassType.generator,
  RelayNode: nodeClassType.relay,
  UPSSystemNode: nodeClassType.upsSystem,
} as const satisfies Record<NodeTypeWithImplicitClass, NodeClassType>;

export const nodeClassNodeTypeMap = reverseObjectEntries(nodeTypeNodeClassMap);
