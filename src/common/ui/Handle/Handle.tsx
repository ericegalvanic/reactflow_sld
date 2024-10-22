import {
  Handle as RFHandle,
  HandleProps as RFHandleProps,
} from '@xyflow/react';

export type HandleProps = RFHandleProps;

const Handle: React.FC<HandleProps> = (props) => {
  return <RFHandle {...props} />;
};

export default Handle;
