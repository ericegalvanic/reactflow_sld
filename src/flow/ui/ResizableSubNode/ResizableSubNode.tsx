import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './ResizableSubNode.styles';
import { useNodeHandlePosition } from '@/flow/hooks';

export type ResizableSubNodeProps = {
  data: {
    label: string;
  };
};

const ResizableSubNode: React.FC<ResizableSubNodeProps> = ({ data }) => {
  const { targetPosition, sourceNodePosition } = useNodeHandlePosition();

  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={48}
        minHeight={48}
      ></NodeResizeControl>
      <Handle type="target" position={targetPosition} />
      <NodeCoreStyled>{data.label}</NodeCoreStyled>
      <Handle type="source" position={sourceNodePosition} />
    </>
  );
};

export default memo(ResizableSubNode);
