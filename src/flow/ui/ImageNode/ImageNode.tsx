import { memo } from 'react';
import Handle from '@/common/ui/Handle';
import {
  NodeClassCodeWrapperStyled,
  NodeCoreStyled,
  NodeRotatableBaseStyled,
} from './ImageNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import {
  NodeClassCode,
  NodeClassType,
  NodeProps,
} from '@/flow/entities';
import { usePopupAnchor } from '@/common/hooks';

export type ImageNodeData = {
  data: {
    image: AppImage;
    class: NodeClassType;
    code: NodeClassCode;
  };
};

export type ImageNodeProps = NodeProps<ImageNodeData>;

const ImageNode = NodeComponent<ImageNodeProps>(
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

    const { src, alt, width, height } = data.image;
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
          <img src={src} alt={alt} width={width} height={height} />
          <NodeClassCodeWrapperStyled>{code}</NodeClassCodeWrapperStyled>
        </NodeCoreStyled>
        <Handle type="source" position={sourceNodePosition} />
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(ImageNode);
