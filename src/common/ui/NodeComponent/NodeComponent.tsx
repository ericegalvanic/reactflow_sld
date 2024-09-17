/* eslint-disable react-hooks/rules-of-hooks */
import {
  createNodeComponent,
  HasId,
  IsNodeComponent,
  NodeFC,
} from '@/common/entities';
import { useFlow } from '@/flow/context';
import { useNodeHandlePosition, useRotatableNode } from '@/flow/hooks';

const NodeComponent = <P = {},>(
  OriginalNodeComponent: NodeFC<P & HasId>
): IsNodeComponent<P & HasId> =>
  createNodeComponent((props) => {
    const { changesEnabled } = useFlow();

    const nodeHandlePositionHookData = useNodeHandlePosition();
    const rotatableNodeHookData = useRotatableNode(props.id, {
      rotatable: changesEnabled,
    });

    return (
      <OriginalNodeComponent
        {...props}
        {...nodeHandlePositionHookData}
        {...rotatableNodeHookData}
      />
    );
  });

export default NodeComponent;
