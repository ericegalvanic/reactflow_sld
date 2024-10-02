import type { Node } from '@xyflow/react';
import { NodeType } from '@/flow/entities';
import { Optional, Retype } from '../types';
import { PossibleNodeData } from './PossibleNodeData';
import { MandatoryNodeData } from './MandatoryNodeData';

export type NativeNode = Node;

export type RFNode = Retype<Node, 'type', NodeType> &
  PossibleNodeData &
  MandatoryNodeData;

export type ManualNode = Retype<RFNode, 'type', NodeType>;

export type CreateRFNodeDTO = Retype<
  Retype<Optional<RFNode, 'id'>, 'type', NodeType, true>,
  'data',
  PossibleNodeData['data'] & Partial<MandatoryNodeData['data']>,
  true
>;

export type UpdateRFNodeDTO = RFNode;
