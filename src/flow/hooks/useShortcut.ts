import { useEffect, useState } from 'react';
import { KeyCode } from '../entities';
import { useKeyPress } from './useKeyPress';

export const useShortcut = (keyCode: KeyCode, callback: Function): void => {
  const [didRun, setDidRun] = useState(false);
  const shouldRun = useKeyPress(keyCode);

  useEffect(() => {
    if (shouldRun && !didRun) {
      callback();
      setDidRun(true);
    } else {
      setDidRun(shouldRun);
    }
  }, [shouldRun, didRun, callback]);
};
