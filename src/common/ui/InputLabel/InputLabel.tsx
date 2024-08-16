import {
  InputLabel as MUIInputLabel,
  InputLabelProps as MUIInputLabelProps,
} from '@mui/material';

export type InputLabelProps = MUIInputLabelProps;

const InputLabel: React.FC<InputLabelProps> = (props) => {
  return <MUIInputLabel {...props} />;
};

export default InputLabel;
