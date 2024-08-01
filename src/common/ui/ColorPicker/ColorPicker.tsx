import { MuiColorInput, MuiColorInputProps } from 'mui-color-input';

export type ColorPickerProps = MuiColorInputProps;

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  return <MuiColorInput {...props} />;
};

export default ColorPicker;
