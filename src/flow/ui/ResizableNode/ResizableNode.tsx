import { memo } from 'react';
import { Handle, NodeResizeControl } from '@xyflow/react';
import { defaultControlStyle } from '@/flow/constants';
import { NodeCoreStyled } from './ResizableNode.styles';
import { useNodeHandlePosition, useRotatableNode } from '@/flow/hooks';
import { CSSRotation } from '@/common/utils';
import { HasId } from '@/common/entities';

export type ResizableNodeProps = {
  data: {
    label: string;
  };
} & HasId;

const ResizableNode: React.FC<ResizableNodeProps> = ({ data, id }) => {
  const { targetPosition, sourceNodePosition } = useNodeHandlePosition();
  const { rotation } = useRotatableNode(id);

  return (
    <>
      <NodeResizeControl
        style={defaultControlStyle}
        minWidth={100}
        minHeight={50}
      ></NodeResizeControl>
      <Handle type="target" position={targetPosition} />
      <NodeCoreStyled style={CSSRotation(rotation)}>
        {data.label}
      </NodeCoreStyled>
      <Handle type="source" position={sourceNodePosition} />
    </>
  );
};

export default memo(ResizableNode);
