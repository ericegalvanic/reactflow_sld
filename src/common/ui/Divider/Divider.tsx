import {
  Divider as MUIDivider,
  DividerProps as MUIDividerProps,
} from '@mui/material';

export type DividerProps = MUIDividerProps;

const Divider: React.FC<DividerProps> = (props) => {
  return <MUIDivider {...props} />;
};

export default Divider;
