import { RFNode } from '../../common/entities';
import { node as createNode } from './node';

export const renamedNode = (node: RFNode, newName: string) =>
  createNode({
    ...node,
    data: {
      ...node.data,
      label: newName,
    },
  });
