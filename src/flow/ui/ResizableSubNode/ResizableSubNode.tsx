import { memo } from 'react';
import { NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './ResizableSubNode.styles';
import NodeComponent from '@/common/ui/NodeComponent/NodeComponent';

export type ResizableSubNodeProps = {
  data: {
    label: string;
  };
};

const ResizableSubNode = NodeComponent<ResizableSubNodeProps>(({ data }) => {
  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={48}
        minHeight={48}
      ></NodeResizeControl>
      <NodeCoreStyled>{data.label}</NodeCoreStyled>
    </>
  );
});

export default memo(ResizableSubNode);
