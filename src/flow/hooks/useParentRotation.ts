import { useParentNode } from './useParentNode';

export const useParentRotation = (currentNodeId: string) => {
  const { node: parentNode } = useParentNode(currentNodeId);

  return parentNode?.data['rotation'] as number | undefined;
};
