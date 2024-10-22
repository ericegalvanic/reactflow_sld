import type { Node } from '@xyflow/react';
import { NodeType } from '@/flow/entities';
import { MadeOptional, Retyped } from '../types';
import { PossibleNodeData } from './PossibleNodeData';
import { MandatoryNodeData } from './MandatoryNodeData';

export type NativeNode = Node;

export type RFNode = Retyped<Node, 'type', NodeType> &
  PossibleNodeData &
  MandatoryNodeData;

export type CreateRFNodeDTO = Retyped<
  Retyped<MadeOptional<RFNode, 'id'>, 'type', NodeType, true>,
  'data',
  PossibleNodeData['data'] & Partial<MandatoryNodeData['data']>,
  true
>;

export type UpdateRFNodeDTO = RFNode;
