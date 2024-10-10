import { memo } from 'react';
import { NodeCoreStyled, NodeRotatableBaseStyled } from './ImageSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import { NodeClassCode, NodeClassType, NodeProps } from '@/flow/entities';

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
        <NodeCoreStyled>
          <img src={src} alt={alt} width={width} height={height} />
        </NodeCoreStyled>
      </NodeRotatableBaseStyled>
    );
  }
);

export default memo(ImageSubNode);
