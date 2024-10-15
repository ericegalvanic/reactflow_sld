import { StrictExtract } from '@/common/types';
import { NodeType } from './nodeType';

export type NodeTypeWithImplicitClass = StrictExtract<
  NodeType,
  | 'CapacitorNode'
  | 'SwitchNode'
  | 'TransferSwitchNode'
  | 'TransformerNode'
  | 'ElectricalPanelNode'
  | 'MiscNode'
  | 'MotorNode'
  | 'GeneratorNode'
  | 'RelayNode'
  | 'UPSSystemNode'
>;
