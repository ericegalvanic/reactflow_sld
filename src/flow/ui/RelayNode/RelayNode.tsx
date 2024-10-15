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
} from './RelayNode.styles';
import { Handle } from '@xyflow/react';
import { switchNodeImage } from './RelayNode.data';
import { memo } from 'react';

export type RelayNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type RelayNodeProps = NodeProps<RelayNodeData>;

const { src, alt, width, height } = switchNodeImage;

const RelayNode = NodeComponent<RelayNodeProps>(
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

export default memo(RelayNode);
