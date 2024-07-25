import type { Node } from '@xyflow/react';
import { NodeType } from '@/flow/entities';
import { Optional, Retype } from '../types';

export type RFNode = Retype<Node, 'type', NodeType>;

export type CreateRFNodeDTO = Optional<
  Optional<Optional<RFNode, 'id'>, 'type'>,
  'data'
>;
