import { RFNode } from '@/common/entities';

export type NodeProps<D extends { data: Record<string, unknown> }> = RFNode & D;
