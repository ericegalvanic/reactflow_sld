import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeCoreStyled,
  NodeRotatableBase,
  NodeRotationHandle,
} from './ResizableNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { usePopupAnchor } from '@/common/hooks';

export type ResizableNodeData = {
  data: {
    label: string;
  };
};

export type ResizableNodeProps = ResizableNodeData;

const ResizableNode = NodeComponent<ResizableNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
    rotatable,
    rotateControlRef,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
  }) => {
    const nodeBaseRef = usePopupAnchor<HTMLDivElement>(setPopupAnchor);

    return (
      <NodeRotatableBase
        ref={nodeBaseRef}
        rotation={rotation}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
      >
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
