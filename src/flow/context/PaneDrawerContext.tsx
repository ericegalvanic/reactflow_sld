import { useBoolean } from '@/common/hooks';
import { SetState } from '@/common/types';
import { createContext, ReactNode, useMemo } from 'react';

export type PaneDrawerState = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setOpen: SetState<boolean>;
};

const defaultState: PaneDrawerState = {
  open: false,
  openDrawer: () => {},
  closeDrawer: () => {},
  toggleDrawer: () => {},
  setOpen: () => {},
};

export const PaneDrawerContext = createContext<PaneDrawerState>(defaultState);

export type PaneDrawerProviderProps = {
  children?: ReactNode;
};

export const PaneDrawerContextProvider: React.FC<PaneDrawerProviderProps> = ({
  children,
}) => {
  const [open, setOpen, openDrawer, closeDrawer, toggleDrawer] = useBoolean();

  const providerValue = useMemo(
    (): PaneDrawerState => ({
      open,
      setOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
    }),
    [closeDrawer, open, openDrawer, setOpen, toggleDrawer]
  );

  return (
    <PaneDrawerContext.Provider value={providerValue}>
      {children}
    </PaneDrawerContext.Provider>
  );
};
