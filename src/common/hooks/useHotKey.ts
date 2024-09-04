import { useEffect } from 'react';

export const useHotKey = (keyCombination: string[], callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keysPressed = new Set<string>();

      if (event.metaKey) keysPressed.add('Meta');
      if (event.ctrlKey) keysPressed.add('Ctrl');
      if (event.altKey) keysPressed.add('Alt');
      if (event.shiftKey) keysPressed.add('Shift');
      if (event.key.length === 1) keysPressed.add(event.key.toUpperCase());

      const combinationMatch = keyCombination.every((key) =>
        keysPressed.has(key)
      );

      if (combinationMatch) {
        event.preventDefault();

        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyCombination, callback]);
};
