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
} from './TransferNode.styles';
import { Handle } from '@xyflow/react';
import { switchNodeImage } from './TransferNode.data';
import { memo } from 'react';

export type TransferNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type TransferNodeProps = NodeProps<TransferNodeData>;

const { src, alt, width, height } = switchNodeImage;

const TransferNode = NodeComponent<TransferNodeProps>(
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

export default memo(TransferNode);
