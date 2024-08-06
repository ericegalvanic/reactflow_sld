import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';

export type BoxProps = MUIBoxProps;

const Box: React.FC<BoxProps> = (props) => {
  return <MUIBox {...props} />;
};

export default Box;
