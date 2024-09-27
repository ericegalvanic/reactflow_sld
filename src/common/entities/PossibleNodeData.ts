import { Retype } from '../types';
import { NodeData } from './NodeData';

export type PossibleNodeData = Retype<
  NodeData,
  'data',
  Partial<NodeData['data']>
>;
