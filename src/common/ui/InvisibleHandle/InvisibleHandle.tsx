import Handle, { HandleProps } from '../Handle';
import { invisibleHandleStyles } from './InvisibleHandle.style';

export type InvisibleHandleProps = HandleProps;

const InvisibleHandle: React.FC<InvisibleHandleProps> = (props) => {
  const { style: overriddenStyle, ...restProps } = props;

  return (
    <Handle
      {...restProps}
      style={{ ...invisibleHandleStyles, ...overriddenStyle }}
    />
  );
};

export default InvisibleHandle;
