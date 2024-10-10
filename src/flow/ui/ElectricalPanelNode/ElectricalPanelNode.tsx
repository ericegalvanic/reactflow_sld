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

export type ElectricalPanelNodeData = {
  data: {
    code: NodeClassCode;
    label: string;
  };
};

export type ElectricalPanelNodeProps = NodeProps<ElectricalPanelNodeData>;

const ElectricalPanelNode = NodeComponent<ElectricalPanelNodeProps>(
  ({
    data,
    rotation,
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
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(ElectricalPanelNode);
