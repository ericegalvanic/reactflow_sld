import { v4, V4Options, validate } from 'uuid';

export type IdOptions = V4Options;

export const id = (options?: IdOptions) => v4(options);

export const formattedId = (v4id: string) => {
  if (!validate(v4id)) {
    return undefined;
  }

  const splitted = v4id.split('-');
  return splitted[splitted.length - 1];
};
