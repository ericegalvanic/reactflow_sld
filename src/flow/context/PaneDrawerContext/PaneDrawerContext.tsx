import { useBoolean } from '@/common/hooks';
import { createContext, ReactNode, useMemo } from 'react';
import { PaneDrawerData } from './PaneDrawerContext.entities';

const defaultState: PaneDrawerData = {
  open: false,
  openDrawer: () => {},
  closeDrawer: () => {},
  toggleDrawer: () => {},
  setOpen: () => {},
};

export const PaneDrawerContext = createContext<PaneDrawerData>(defaultState);

export type PaneDrawerProviderProps = {
  children?: ReactNode;
};

export const PaneDrawerContextProvider: React.FC<PaneDrawerProviderProps> = ({
  children,
}) => {
  const [open, setOpen, openDrawer, closeDrawer, toggleDrawer] = useBoolean();

  const providerValue = useMemo(
    (): PaneDrawerData => ({
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
