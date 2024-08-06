import { useEffect } from 'react';

export const useKeyboardEventListener = (
  keyboardKey: string,
  eventHandler: () => void
) => {
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      console.log(event);
      if (event.key === keyboardKey) {
        eventHandler();
      }
    };

    document.addEventListener('keydown', handleEscKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [eventHandler, keyboardKey]);
};
