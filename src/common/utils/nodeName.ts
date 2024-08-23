import { RFNode, NativeNode } from '../entities';

export type NodeName<N extends NativeNode> = N extends {
  data: { label: infer TNodeName };
}
  ? TNodeName
  : undefined;

export const nodeName = <N extends RFNode>(node: RFNode) =>
  (('label' in node.data &&
    typeof node.data['label'] === 'string' &&
    node.data['label']) ||
    undefined) as NodeName<N>;
