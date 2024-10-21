import { Retyped } from '../types';
import { NodeData } from './NodeData';

export type PossibleNodeData = Retyped<
  NodeData,
  'data',
  Partial<NodeData['data']>
>;
