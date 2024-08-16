import {
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from '@mui/material';
import FormControl, { FormControlProps } from '../FormControl';
import InputLabel, { InputLabelProps } from '../InputLabel';

export type SelectProps<V = unknown> = MUISelectProps<V> & {
  formControlProps?: FormControlProps;
  inputLabelProps?: Omit<InputLabelProps, 'children' | 'id'>;
  inputLabel?: InputLabelProps['children'];
  inputLabelId?: InputLabelProps['id'];
};

const Select = <V,>({
  formControlProps,
  inputLabelProps,
  inputLabel,
  inputLabelId,
  ...props
}: SelectProps<V>) => {
  return (
    <FormControl {...formControlProps}>
      <InputLabel
        {...inputLabelProps}
        children={inputLabel}
        id={inputLabelId}
      />
      <MUISelect {...props} />
    </FormControl>
  );
};

export default Select;
