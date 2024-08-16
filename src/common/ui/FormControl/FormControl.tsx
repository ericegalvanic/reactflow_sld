import {
  FormControl as MUIFormControl,
  FormControlProps as MUIFormControlProps,
} from '@mui/material';

export type FormControlProps = MUIFormControlProps;

const FormControl: React.FC<FormControlProps> = (props) => {
  return <MUIFormControl {...props} />;
};

export default FormControl;
