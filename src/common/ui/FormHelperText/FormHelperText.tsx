import {
  FormHelperText as MUIFormHelperText,
  FormHelperTextProps as MUIFormHelperTextProps,
} from '@mui/material';

export type FormHelperTextProps = MUIFormHelperTextProps;

const FormHelperText: React.FC<FormHelperTextProps> = (props) => {
  return <MUIFormHelperText {...props} />;
};

export default FormHelperText;
