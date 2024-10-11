import { reverseObjectEntries } from '@/common/utils';
import { nodeClassType, NodeClassType } from './NodeClassType';
import { NodeTypeWithImplicitClass } from './NodeTypeWithImplicitClass';

export const nodeTypeNodeClassMap = {
  CapacitorNode: nodeClassType.capacitor,
  ElectricalPanelNode: nodeClassType.electricalPanel,
  SwitchNode: nodeClassType.switch,
  TransferSwitchNode: nodeClassType.transferSwitch,
  TransformerNode: nodeClassType.transformer,
} as const satisfies Record<NodeTypeWithImplicitClass, NodeClassType>;

export const nodeClassNodeTypeMap = reverseObjectEntries(nodeTypeNodeClassMap);
