import { ReactFlow as RF, ReactFlowProps as RFProps } from '@xyflow/react';
import { ElementRef, ForwardedRef, forwardRef } from 'react';

export type ReactFlowProps = RFProps;

const ReactFlow = forwardRef(
  (props: ReactFlowProps, ref: ForwardedRef<ElementRef<typeof RF>>) => {
    return <RF ref={ref} {...props} />;
  }
);

export default ReactFlow;
