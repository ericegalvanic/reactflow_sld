import {
  Drawer as MUIDrawer,
  DrawerProps as MUIDrawerProps,
} from '@mui/material';

export type DrawerProps = MUIDrawerProps;

const Drawer: React.FC<DrawerProps> = (props) => {
  return <MUIDrawer {...props} />;
};

export default Drawer;
