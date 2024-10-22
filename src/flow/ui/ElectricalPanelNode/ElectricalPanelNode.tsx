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
  NodeLabelStyled,
  NodeRotatableBaseStyled,
  NodeTextDataStyled,
  PanelLineStyled,
} from './ElectricalPanelNode.styles';
import { NodeResizeControl } from '@xyflow/react';
import { memo } from 'react';
import { defaultControlStyle } from '@/flow/constants';
import InvisibleHandle from '@/common/ui/InvisibleHandle';

export type ElectricalPanelNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type ElectricalPanelNodeProps = NodeProps<ElectricalPanelNodeData>;

const ElectricalPanelNode = NodeComponent<ElectricalPanelNodeProps>((props) => {
  const {
    data,
    rotation,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
    nodeColor,
    targetHandlePosition,
    sourceHandlePosition,
  } = props;

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
      <InvisibleHandle position={targetHandlePosition} type="target" />
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={280}
        minHeight={60}
        variant={ResizeControlVariant.Line}
      ></NodeResizeControl>
      <NodeCoreStyled>
        <NodeTextDataStyled>
          <NodeLabelStyled>{label}</NodeLabelStyled>
          <NodeClassCodeStyled>{code}</NodeClassCodeStyled>
        </NodeTextDataStyled>
        <PanelLineStyled />
      </NodeCoreStyled>
      <InvisibleHandle position={sourceHandlePosition} type="source" />
    </NodeRotatableBaseStyled>
  );
});

export default memo(ElectricalPanelNode);
