import { nodeImageMap } from '@/flow/data/nodeImageMap';
import { NodeClassType } from '@/flow/entities';

export const SWITCH_NODE_CLASS: NodeClassType = 'CIRCUIT_BREAKER';

export const switchNodeImage = nodeImageMap[SWITCH_NODE_CLASS];
