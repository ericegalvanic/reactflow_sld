import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled, NodeRotatableBase } from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';

export type ResizableSubNodeProps = {
  data: {
    label: string;
  };
};

const ResizableSubNode = NodeComponent<ResizableSubNodeProps>(
  ({ data, parentRotation }) => {
    return (
      <NodeRotatableBase rotation={parentRotation ?? 0}>
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={48}
          minHeight={48}
        ></NodeResizeControl>

        <NodeCoreStyled>{data.label}</NodeCoreStyled>
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableSubNode);
