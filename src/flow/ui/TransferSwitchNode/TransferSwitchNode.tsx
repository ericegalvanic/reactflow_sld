import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import {
  NodeClassCode,
  NodeProps,
  ResizeControlVariant,
} from '@/flow/entities';
import {
  NodeClassCodeStyled,
  NodeCoreStyled,
  NodeImageStyled,
  NodeLabelStyled,
  NodeRotatableBaseStyled,
  NodeTextDataStyled,
} from './TransferSwitchNode.styles';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { switchNodeImage } from './TransferSwitchNode.data';
import { memo } from 'react';
import { css } from '@/common/utils';

export type TransferSwitchNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type TransferSwitchNodeProps = NodeProps<TransferSwitchNodeData>;

const { src, alt, width, height } = switchNodeImage;

const leftTargetHandleStyles = css({
  left: 125.6,
  top: -2,
});

const rightTargetHandleStyles = css({
  left: 154.6,
  top: -2,
});

const CapacitorNode = NodeComponent<TransferSwitchNodeProps>(
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
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={100}
          minHeight={50}
          variant={ResizeControlVariant.Line}
        ></NodeResizeControl>

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

export default memo(CapacitorNode);
