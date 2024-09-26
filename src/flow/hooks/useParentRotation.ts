import { parent } from '@/common/utils';
import { useFlow } from '../context';
import { useNode } from './useNode';

export const useParentRotation = (currentNodeId: string) => {
  const { nodes } = useFlow();
  const { node } = useNode(currentNodeId);

  if (!node) {
    return undefined;
  }

  const parentNode = parent(node, nodes);

  return parentNode?.data['rotation'] as number | undefined;
};
