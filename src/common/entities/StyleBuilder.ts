import { Retyped } from '../types';
import { CSS as ReactCSS } from './CSS';

type CSS = Retyped<ReactCSS, 'background', string | undefined, true>;

export type StyleBuilder = (css?: CSS) => CSS;
