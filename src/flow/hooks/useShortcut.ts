import { useEffect } from 'react';
import { KeyCode } from '../entities';
import { useKeyPress } from './useKeyPress';
import { useBoolean } from '@/common/hooks';

export const useShortcut = (keyCode: KeyCode, callback: Function): void => {
  const [didRun, setDidRun] = useBoolean();
  const shouldRun = useKeyPress(keyCode);

  useEffect(() => {
    if (shouldRun && !didRun) {
      callback();
      setDidRun(true);
    } else {
      setDidRun(shouldRun);
    }
  }, [shouldRun, didRun, callback, setDidRun]);
};
