import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeCoreStyled,
  NodeRotatableBase,
  NodeRotationHandle,
} from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';

export type ResizableSubNodeProps = {
  data: {
    label: string;
  };
};

const ResizableSubNode = NodeComponent<ResizableSubNodeProps>(
  ({ data, rotation, rotateControlRef, rotatable }) => {
    return (
      <NodeRotatableBase rotation={rotation}>
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={48}
          minHeight={48}
        ></NodeResizeControl>
        <NodeRotationHandle
          ref={rotateControlRef}
          rotatable={rotatable}
          className="nodrag"
        ></NodeRotationHandle>
        <NodeCoreStyled>{data.label}</NodeCoreStyled>
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableSubNode);
