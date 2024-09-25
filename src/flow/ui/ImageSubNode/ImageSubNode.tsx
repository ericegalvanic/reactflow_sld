import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import {
  NodeClassCodeWrapperStyled,
  NodeCoreStyled,
  NodeRotatableBaseStyled,
} from './ImageSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';
import { AppImage } from '@/common/entities';
import { NodeClassCode, NodeClassType } from '@/flow/entities';

export type ImageSubNodeProps = {
  data: {
    image: AppImage;
    class: NodeClassType;
    code: NodeClassCode;
  };
};

const ImageSubNode = NodeComponent<ImageSubNodeProps>(({ data }) => {
  const { src, alt, width, height } = data.image;
  const code = data.code;

  return (
    <NodeRotatableBaseStyled>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={100}
        minHeight={50}
      ></NodeResizeControl>

      <NodeCoreStyled>
        <img src={src} alt={alt} width={width} height={height} />
        <NodeClassCodeWrapperStyled>{code}</NodeClassCodeWrapperStyled>
      </NodeCoreStyled>
    </NodeRotatableBaseStyled>
  );
});

export default memo(ImageSubNode);
