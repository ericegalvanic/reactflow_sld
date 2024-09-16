/* eslint-disable react-hooks/rules-of-hooks */
import {
  createNodeComponent,
  HasId,
  IsNodeComponent,
  NodeFC,
} from '@/common/entities';
import { useNodeHandlePosition, useRotatableNode } from '@/flow/hooks';

const NodeComponent = <P = {},>(
  OriginalNodeComponent: NodeFC<P & HasId>
): IsNodeComponent<P & HasId> =>
  createNodeComponent((props) => {
    const nodeHandlePositionHookData = useNodeHandlePosition();
    const rotatableNodeHookData = useRotatableNode(props.id);

    return (
      <OriginalNodeComponent
        {...props}
        {...nodeHandlePositionHookData}
        {...rotatableNodeHookData}
      />
    );
  });

export default NodeComponent;
