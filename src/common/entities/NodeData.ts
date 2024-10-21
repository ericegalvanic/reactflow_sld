import { CapacitorNodeData } from '@/flow/ui/CapacitorNode';
import { CircuitBreakerNodeData } from '@/flow/ui/CircuitBreakerNode';
import { ElectricalPanelNodeData } from '@/flow/ui/ElectricalPanelNode';
import { FuseNodeData } from '@/flow/ui/FuseNode';
import { GeneratorNodeData } from '@/flow/ui/GeneratorNode';
import { ImageNodeData } from '@/flow/ui/ImageNode';
import { ImageSubNodeData } from '@/flow/ui/ImageSubNode';
import { MiscNodeData } from '@/flow/ui/MiscNode';
import { MotorNodeData } from '@/flow/ui/MotorNode';
import { RelayNodeData } from '@/flow/ui/RelayNode';
import { ResizableNodeData } from '@/flow/ui/ResizableNode';
import { ResizableSubNodeData } from '@/flow/ui/ResizableSubNode';
import { SubSwitchNodeData } from '@/flow/ui/SubSwitchNode';
import { SwitchNodeData } from '@/flow/ui/SwitchNode';
import { TransformerNodeData } from '@/flow/ui/TransformerNode';
import { UPSSystemNodeData } from '@/flow/ui/UPSSystemNode';

export type NodeData = ResizableNodeData &
  ResizableSubNodeData &
  ImageNodeData &
  ImageSubNodeData &
  CapacitorNodeData &
  SubSwitchNodeData &
  TransformerNodeData &
  UPSSystemNodeData &
  SwitchNodeData &
  ElectricalPanelNodeData &
  GeneratorNodeData &
  MotorNodeData &
  RelayNodeData &
  MiscNodeData &
  FuseNodeData &
  CircuitBreakerNodeData;
