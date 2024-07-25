import { v4, V4Options } from 'uuid';

export type IdOptions = V4Options;

export const id = (options?: IdOptions) => v4(options);
