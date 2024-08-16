import { Stack as MUIStack, StackProps as MUIStackProps } from '@mui/material';

export type StackProps = MUIStackProps;

const Stack: React.FC<StackProps> = (props) => {
  return <MUIStack {...props} />;
};

export default Stack;
