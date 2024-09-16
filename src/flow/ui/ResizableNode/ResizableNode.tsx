import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeCoreStyled,
  NodeRotatableBase,
  NodeRotationHandle,
} from './ResizableNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';

export type ResizableNodeProps = {
  data: {
    label: string;
  };
};

const ResizableNode = NodeComponent<ResizableNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
    rotatable,
    rotateControlRef,
  }) => {
    return (
      <NodeRotatableBase rotation={rotation}>
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={100}
          minHeight={50}
        ></NodeResizeControl>
        <NodeRotationHandle
          ref={rotateControlRef}
          rotatable={rotatable}
          className="nodrag"
        ></NodeRotationHandle>
        <Handle type="target" position={targetPosition} />
        <NodeCoreStyled>{data.label}</NodeCoreStyled>
        <Handle type="source" position={sourceNodePosition} />
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableNode);
