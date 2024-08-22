import { memo } from 'react';
import { Handle, Position, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './ResizableSubNode.styles';

export type ResizableSubNodeProps = {
  data: {
    label: string;
  };
};

const ResizableSubNode: React.FC<ResizableSubNodeProps> = ({ data }) => {
  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={48}
        minHeight={48}
      ></NodeResizeControl>
      <Handle type="target" position={Position.Top} />
      <NodeCoreStyled>{data.label}</NodeCoreStyled>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default memo(ResizableSubNode);
