import { useEffect, useRef } from 'react';

export const useEffectOnce = (effectCallback: () => void) => {
  const hasBeenAlreadyCalled = useRef<boolean>(false);

  useEffect(() => {
    if (hasBeenAlreadyCalled.current) return;

    hasBeenAlreadyCalled.current = true;
    effectCallback();
  }, [effectCallback]);
};
