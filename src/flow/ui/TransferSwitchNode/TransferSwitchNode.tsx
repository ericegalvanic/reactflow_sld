import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import { NodeClassCode, NodeProps } from '@/flow/entities';
import {
  leftTargetHandleStyles,
  NodeClassCodeStyled,
  NodeCoreStyled,
  NodeImageStyled,
  NodeLabelStyled,
  NodeRotatableBaseStyled,
  NodeTextDataStyled,
  rightTargetHandleStyles,
} from './TransferSwitchNode.styles';
import { Handle } from '@xyflow/react';
import { switchNodeImage } from './TransferSwitchNode.data';
import { memo } from 'react';

export type TransferSwitchNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type TransferSwitchNodeProps = NodeProps<TransferSwitchNodeData>;

const { src, alt, width, height } = switchNodeImage;

const TransferSwitchNode = NodeComponent<TransferSwitchNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
    nodeColor,
    id,
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
          style={leftTargetHandleStyles}
          id={`${id}-left`}
        />
        <Handle
          type="target"
          position={targetPosition}
          style={rightTargetHandleStyles}
          id={`${id}-right`}
        />
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

export default memo(TransferSwitchNode);
