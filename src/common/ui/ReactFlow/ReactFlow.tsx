import { ReactFlow as RF, ReactFlowProps as RFProps } from '@xyflow/react';

export type ReactFlowProps = RFProps;

const ReactFlow: React.FC<ReactFlowProps> = (props) => {
  return <RF {...props} />;
};

export default ReactFlow;
