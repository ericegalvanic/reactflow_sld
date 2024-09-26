import { useNodeHandlePosition, useRotatableNode } from '@/flow/hooks';

export type NodeComponentProps<P extends Record<string, unknown> = {}> =
  ReturnType<typeof useNodeHandlePosition> &
    ReturnType<typeof useRotatableNode> & {
      parentRotation: number | undefined;
    } & P;
