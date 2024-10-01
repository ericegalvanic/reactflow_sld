import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled, NodeRotatableBase } from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { usePopupAnchor } from '@/common/hooks';

export type ResizableSubNodeData = {
  data: {
    label: string;
  };
};

export type ResizableSubNodeProps = ResizableSubNodeData;

const ResizableSubNode = NodeComponent<ResizableSubNodeProps>(
  ({
    data,
    parentRotation,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
  }) => {
    const nodeBaseRef = usePopupAnchor<HTMLDivElement>(setPopupAnchor);

    return (
      <NodeRotatableBase
        ref={nodeBaseRef}
        rotation={parentRotation ?? 0}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
      >
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
