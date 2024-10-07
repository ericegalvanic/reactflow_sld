import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled, NodeRotatableBaseStyled } from './ImageSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import {
  NodeClassCode,
  NodeClassType,
  NodeProps,
  ResizeControlVariant,
} from '@/flow/entities';

export type ImageSubNodeData = {
  data: {
    image: AppImage;
    class: NodeClassType;
    code: NodeClassCode;
  };
};

export type ImageSubNodeProps = NodeProps<ImageSubNodeData>;

const ImageSubNode = NodeComponent<ImageSubNodeProps>(
  ({ data, parentRotation, nodeColor }) => {
    const { src, alt, width, height } = data.image;

    return (
      <NodeRotatableBaseStyled rotation={parentRotation ?? 0} {...nodeColor}>
        <NodeResizeControl
          style={defaultControlStyle}
          minWidth={100}
          minHeight={50}
          variant={ResizeControlVariant.Line}
        ></NodeResizeControl>

        <NodeCoreStyled>
          <img src={src} alt={alt} width={width} height={height} />
        </NodeCoreStyled>
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(ImageSubNode);
