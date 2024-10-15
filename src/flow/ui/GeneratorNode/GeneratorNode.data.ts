import { nodeImageMap } from '@/flow/data/nodeImageMap';
import { NodeClassType } from '@/flow/entities';

export const SWITCH_NODE_CLASS: NodeClassType = 'GENERATOR';

export const switchNodeImage = nodeImageMap[SWITCH_NODE_CLASS];
