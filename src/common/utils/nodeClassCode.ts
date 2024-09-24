import { NodeClassCode } from '@/flow/entities';
import { RFNode } from '../entities';

export const nodeClassCode = (node: RFNode): NodeClassCode | undefined =>
  'code' in node.data && typeof node.data['code'] === 'string'
    ? (node.data['code'] as NodeClassCode)
    : undefined;
