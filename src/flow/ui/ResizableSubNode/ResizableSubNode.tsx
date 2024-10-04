import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled, NodeRotatableBase } from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { usePopupAnchor } from '@/common/hooks';
import { RFNode } from '@/common/entities';
import { ResizeControlVariant } from '@/flow/entities';

export type ResizableSubNodeData = {
  data: {
    label: string;
  };
};

export type ResizableSubNodeProps = RFNode & ResizableSubNodeData;

const ResizableSubNode = NodeComponent<ResizableSubNodeProps>(
  ({
    data,
    parentRotation,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
    nodeColor,
  }) => {
    const nodeBaseRef = usePopupAnchor<HTMLDivElement>(setPopupAnchor);

    return (
      <NodeRotatableBase
        ref={nodeBaseRef}
        rotation={parentRotation ?? 0}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
        {...nodeColor}
      >
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={48}
          minHeight={48}
          variant={ResizeControlVariant.Line}
        ></NodeResizeControl>

        <NodeCoreStyled>{data.label}</NodeCoreStyled>
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableSubNode);
