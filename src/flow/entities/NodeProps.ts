import { RFNode } from '@/common/entities';

export type NodeProps<D extends { data: object }> = RFNode & D;
