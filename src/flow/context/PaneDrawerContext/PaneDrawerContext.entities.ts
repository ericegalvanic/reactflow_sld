import { SetState } from '@/common/types';

export type PaneDrawerData = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setOpen: SetState<boolean>;
};
