import { memo } from 'react';
import { Handle, Position, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './styled';

export type ResizableNodeProps = {
  data: {
    label: string;
  };
};

const ResizableNode: React.FC<ResizableNodeProps> = ({ data }) => {
  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={100}
        minHeight={50}
      ></NodeResizeControl>
      <Handle type="target" position={Position.Top} />
      <NodeCoreStyled>{data.label}</NodeCoreStyled>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default memo(ResizableNode);
