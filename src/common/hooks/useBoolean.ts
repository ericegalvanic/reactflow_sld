import { useCallback, useState } from 'react';

export const useBoolean = (initialValue: boolean | (() => boolean) = false) => {
  const [bool, setBool] = useState(initialValue);

  const on = useCallback(() => setBool(true), []);
  const off = useCallback(() => setBool(false), []);
  const toggle = useCallback(() => setBool((b) => !b), []);

  return [bool, setBool, on, off, toggle] as const;
};
