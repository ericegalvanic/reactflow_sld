import { memo } from 'react';
import { NodeCoreStyled, NodeRotatableBase } from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { usePopupAnchor } from '@/common/hooks';
import { NodeProps } from '@/flow/entities';

export type ResizableSubNodeData = {
  data: {
    label: string;
  };
};

export type ResizableSubNodeProps = NodeProps<ResizableSubNodeData>;

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
        <NodeCoreStyled>{data.label}</NodeCoreStyled>
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableSubNode);
