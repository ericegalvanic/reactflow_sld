import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import { NodeProps, subNodeArchetype, SubNodeArchetype } from '@/flow/entities';
import {
  bottomHandleStyles,
  NodeCoreStyled,
  NodeImageStyled,
  NodeRotatableBaseStyled,
  topHandleStyles,
} from './SubSwitchNode.styles';
import { Handle } from '@xyflow/react';
import { switchNodeImage } from './SubSwitchNode.data';
import { memo } from 'react';

export type SubSwitchNodeData = {
  data: {
    archetype: SubNodeArchetype;
  };
};

export type SubSwitchNodeProps = NodeProps<SubSwitchNodeData>;

const { src, alt, width, height } = switchNodeImage;

const SubSwitchNode = NodeComponent<SubSwitchNodeProps>(
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
    const archetype = data.archetype;
    const hasTopHandle = archetype === subNodeArchetype.lineSide;
    const hasBottomHandle = archetype === subNodeArchetype.loadSide;

    return (
      <NodeRotatableBaseStyled
        ref={nodeBaseRef}
        rotation={rotation}
        onMouseEnter={handleNodeBaseHover}
        onMouseLeave={handleNodeBaseMouseLeave}
        {...nodeColor}
      >
        {hasTopHandle && (
          <Handle
            type="target"
            position={targetPosition}
            style={topHandleStyles}
          />
        )}
        <NodeCoreStyled>
          <NodeImageStyled
            archetype={archetype}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </NodeCoreStyled>
        {hasBottomHandle && (
          <Handle
            type="source"
            position={sourceNodePosition}
            style={bottomHandleStyles}
          />
        )}
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(SubSwitchNode);