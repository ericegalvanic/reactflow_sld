import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeClassCodeWrapperStyled,
  NodeCoreStyled,
  NodeRotatableBaseStyled,
  NodeRotationHandleStyled,
} from './ImageNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import { NodeClassCode, NodeClassType } from '@/flow/entities';
import { usePopupAnchor } from '@/common/hooks';

export type ImageNodeData = {
  data: {
    image: AppImage;
    class: NodeClassType;
    code: NodeClassCode;
  };
};

export type ImageNodeProps = ImageNodeData;

const ImageNode = NodeComponent<ImageNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
    rotatable,
    rotateControlRef,
    handleNodeBaseHover,
    handleNodeBaseMouseLeave,
    setPopupAnchor,
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
      >
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={100}
          minHeight={50}
        ></NodeResizeControl>
        <NodeRotationHandleStyled
          ref={rotateControlRef}
          rotatable={rotatable}
          className="nodrag"
        ></NodeRotationHandleStyled>
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
