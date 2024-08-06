import { Retype } from '../types';
import { CSS as ReactCSS } from './CSS';

type CSS = Retype<ReactCSS, 'background', string | undefined, true>;

export type StyleBuilder = (css?: CSS) => CSS;
