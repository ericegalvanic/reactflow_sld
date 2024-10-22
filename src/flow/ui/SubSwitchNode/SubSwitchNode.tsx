import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import { NodeProps, subNodeArchetype } from '@/flow/entities';
import {
  bottomHandleStyles,
  NodeCoreStyled,
  NodeImageStyled,
  NodeRotatableBaseStyled,
  topHandleStyles,
} from './SubSwitchNode.styles';
import Handle from '@/common/ui/Handle';
import { switchNodeImage } from './SubSwitchNode.data';
import { memo, useMemo } from 'react';
import InvisibleHandle from '@/common/ui/InvisibleHandle';
import { SubNodeData } from '@/common/entities';

export type SubSwitchNodeData = SubNodeData;

export type SubSwitchNodeProps = NodeProps<SubSwitchNodeData>;

const { src, alt, width, height } = switchNodeImage;

const SubSwitchNode = NodeComponent<SubSwitchNodeProps>((props) => {
  const {
    data,
    targetHandlePosition: targetPosition,
    rotation,
    sourceHandlePosition: sourceNodePosition,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
    nodeColor,
  } = props;
  const nodeBaseRef = usePopupAnchor<HTMLDivElement>(setPopupAnchor);
  const archetype = data.archetype;
  const hasTopHandle = useMemo(
    () => archetype === subNodeArchetype.lineSide,
    [archetype]
  );
  const hasBottomHandle = useMemo(
    () => archetype === subNodeArchetype.loadSide,
    [archetype]
  );

  return (
    <NodeRotatableBaseStyled
      ref={nodeBaseRef}
      rotation={rotation}
      onMouseEnter={handleNodeBaseHover}
      onMouseLeave={handleNodeBaseMouseLeave}
      {...nodeColor}
    >
      {hasTopHandle ? (
        <Handle
          type="target"
          position={targetPosition}
          style={topHandleStyles}
        />
      ) : (
        <InvisibleHandle
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
      {hasBottomHandle ? (
        <Handle
          type="source"
          position={sourceNodePosition}
          style={bottomHandleStyles}
        />
      ) : (
        <InvisibleHandle
          type="source"
          position={sourceNodePosition}
          style={bottomHandleStyles}
        />
      )}
    </NodeRotatableBaseStyled>
  );
});

export default memo(SubSwitchNode);
