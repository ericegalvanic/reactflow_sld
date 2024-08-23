import type { Node } from '@xyflow/react';
import { NodeType } from '@/flow/entities';
import { Optional, Retype } from '../types';
import { HasName } from './HasName';

export type NativeNode = Node;

export type RFNode = Retype<Node, 'type', NodeType> & HasName;

export type ManualNode = Retype<RFNode, 'type', NodeType>;

export type CreateRFNodeDTO = Optional<
  Retype<Optional<RFNode, 'id'>, 'type', NodeType, true>,
  'data'
>;
