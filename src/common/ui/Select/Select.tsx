import {
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from '@mui/material';
import FormControl, { FormControlProps } from '../FormControl';
import InputLabel, { InputLabelProps } from '../InputLabel';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';

export type SelectProps<V = unknown> = MUISelectProps<V> & {
  formControlProps?: FormControlProps;
  inputLabelProps?: Omit<InputLabelProps, 'children' | 'id'>;
  inputLabel?: InputLabelProps['children'];
  inputLabelId?: InputLabelProps['id'];
  formHelperTextProps?: Omit<FormHelperTextProps, 'children'>;
  helperText?: FormHelperTextProps['children'];
};

const Select = <V,>({
  formControlProps,
  inputLabelProps,
  inputLabel,
  inputLabelId,
  formHelperTextProps,
  helperText,
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
      {helperText && (
        <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
