import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import { NodeClassCode, NodeProps } from '@/flow/entities';
import {
  bottomHandleStyles,
  NodeClassCodeStyled,
  NodeCoreStyled,
  NodeImageStyled,
  NodeLabelStyled,
  NodeRotatableBaseStyled,
  NodeTextDataStyled,
  topHandleStyles,
} from './MotorNode.styles';
import { Handle } from '@xyflow/react';
import { switchNodeImage } from './MotorNode.data';
import { memo } from 'react';

export type MotorNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type MotorNodeProps = NodeProps<MotorNodeData>;

const { src, alt, width, height } = switchNodeImage;

const MotorNode = NodeComponent<MotorNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
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
        <Handle
          type="target"
          position={targetPosition}
          style={topHandleStyles}
        />
        <NodeCoreStyled>
          <NodeImageStyled src={src} alt={alt} width={width} height={height} />
          <NodeTextDataStyled>
            <NodeLabelStyled>{label}</NodeLabelStyled>
            <NodeClassCodeStyled>{code}</NodeClassCodeStyled>
          </NodeTextDataStyled>
        </NodeCoreStyled>
        <Handle
          type="source"
          position={sourceNodePosition}
          style={bottomHandleStyles}
        />
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(MotorNode);
