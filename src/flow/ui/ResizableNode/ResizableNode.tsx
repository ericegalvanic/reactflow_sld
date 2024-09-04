import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './ResizableNode.styles';
import { useNodeHandlePosition } from '@/flow/hooks';

export type ResizableNodeProps = {
  data: {
    label: string;
  };
};

const ResizableNode: React.FC<ResizableNodeProps> = ({ data }) => {
  const { targetPosition, sourceNodePosition } = useNodeHandlePosition();

  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={100}
        minHeight={50}
      ></NodeResizeControl>
      <Handle type="target" position={targetPosition} />
      <NodeCoreStyled>{data.label}</NodeCoreStyled>
      <Handle type="source" position={sourceNodePosition} />
    </>
  );
};

export default memo(ResizableNode);
