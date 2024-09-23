import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeCoreStyled,
  NodeRotatableBase,
  NodeRotationHandle,
} from './ImageNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import { NodeClassType } from '@/flow/entities';

export type ImageNodeProps = {
  data: {
    image: AppImage;
    class: NodeClassType;
  };
};

const ImageNode = NodeComponent<ImageNodeProps>(
  ({
    data,
    targetPosition,
    rotation,
    sourceNodePosition,
    rotatable,
    rotateControlRef,
  }) => {
    const { src, alt, width, height } = data.image;

    return (
      <NodeRotatableBase rotation={rotation}>
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={100}
          minHeight={50}
        ></NodeResizeControl>
        <NodeRotationHandle
          ref={rotateControlRef}
          rotatable={rotatable}
          className="nodrag"
        ></NodeRotationHandle>
        <Handle type="target" position={targetPosition} />
        <NodeCoreStyled>
          <img src={src} alt={alt} width={width} height={height} />
        </NodeCoreStyled>
        <Handle type="source" position={sourceNodePosition} />
      </NodeRotatableBase>
    );
  }
);

export default memo(ImageNode);
