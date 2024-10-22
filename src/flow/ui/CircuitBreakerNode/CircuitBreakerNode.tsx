import { usePopupAnchor } from '@/common/hooks';
import NodeComponent from '@/common/ui/NodeComponent';
import { NodeProps, subNodeArchetype } from '@/flow/entities';
import {
  bottomHandleStyles,
  NodeCoreStyled,
  NodeImageStyled,
  NodeRotatableBaseStyled,
  topHandleStyles,
} from './CircuitBreakerNode.styles';
import Handle from '@/common/ui/Handle';
import { switchNodeImage } from './CircuitBreakerNode.data';
import { memo } from 'react';
import InvisibleHandle from '@/common/ui/InvisibleHandle';
import { SubNodeData } from '@/common/entities';

export type CircuitBreakerNodeData = SubNodeData;

export type CircuitBreakerNodeProps = NodeProps<CircuitBreakerNodeData>;

const { src, alt, width, height } = switchNodeImage;

const CircuitBreakerNode = NodeComponent<CircuitBreakerNodeProps>(
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
  }
);

export default memo(CircuitBreakerNode);
