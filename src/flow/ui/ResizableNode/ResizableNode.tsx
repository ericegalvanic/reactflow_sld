import { memo } from 'react';
import Handle from '@/common/ui/Handle';
import { NodeCoreStyled, NodeRotatableBase } from './ResizableNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { usePopupAnchor } from '@/common/hooks';
import { NodeProps } from '@/flow/entities';

export type ResizableNodeData = {
  data: {
    label: string;
  };
};

export type ResizableNodeProps = NodeProps<ResizableNodeData>;

const ResizableNode = NodeComponent<ResizableNodeProps>(
  ({
    data,
    targetHandlePosition: targetPosition,
    rotation,
    sourceHandlePosition: sourceNodePosition,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
    nodeColor,
  }) => {
    const nodeBaseRef = usePopupAnchor<HTMLDivElement>(setPopupAnchor);

    return (
      <NodeRotatableBase
        ref={nodeBaseRef}
        rotation={rotation}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
        {...nodeColor}
      >
        <Handle type="target" position={targetPosition} />
        <NodeCoreStyled>{data.label}</NodeCoreStyled>
        <Handle type="source" position={sourceNodePosition} />
      </NodeRotatableBase>
    );
  }
);

export default memo(ResizableNode);
