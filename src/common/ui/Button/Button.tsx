import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

export type ButtonProps = MUIButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />;
};

export default Button;
