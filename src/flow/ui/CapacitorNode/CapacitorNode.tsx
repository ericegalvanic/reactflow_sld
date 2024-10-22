import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import {
  NodeClassCode,
  NodeProps,
} from '@/flow/entities';
import {
  NodeClassCodeStyled,
  NodeCoreStyled,
  NodeImageStyled,
  NodeLabelStyled,
  NodeRotatableBaseStyled,
  NodeTextDataStyled,
} from './CapacitorNode.styles';
import Handle from '@/common/ui/Handle';
import { switchNodeImage } from './CapacitorNode.data';
import { memo } from 'react';

export type CapacitorNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type CapacitorNodeProps = NodeProps<CapacitorNodeData>;

const { src, alt, width, height } = switchNodeImage;

const CapacitorNode = NodeComponent<CapacitorNodeProps>(
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
    const label = data.label;
    const code = data.code;

    return (
      <NodeRotatableBaseStyled
        ref={nodeBaseRef}
        rotation={rotation}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
        {...nodeColor}
      >
        <Handle type="target" position={targetPosition} />
        <NodeCoreStyled>
          <NodeImageStyled src={src} alt={alt} width={width} height={height} />
          <NodeTextDataStyled>
            <NodeLabelStyled>{label}</NodeLabelStyled>
            <NodeClassCodeStyled>{code}</NodeClassCodeStyled>
          </NodeTextDataStyled>
        </NodeCoreStyled>
        <Handle type="source" position={sourceNodePosition} />
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(CapacitorNode);
