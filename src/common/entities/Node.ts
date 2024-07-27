import type { Node } from '@xyflow/react';
import { NodeType } from '@/flow/entities';
import { Optional, Retype } from '../types';

export type RFNode = Node;

export type ManualNode = Retype<RFNode, 'type', NodeType>

export type CreateRFNodeDTO = Optional<
  Optional<Optional<RFNode, 'id'>, 'type'>,
  'data'
>;
