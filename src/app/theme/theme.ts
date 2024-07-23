import * as colors from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ColorPartial } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette extends Record<keyof typeof colors, ColorPartial> {}

  interface PaletteOptions
    extends Partial<Record<keyof typeof colors, ColorPartial>> {}
}

export const appTheme = createTheme({
  palette: {
    ...colors,
  },
});
