import {
  MenuItem as MUIMenuItem,
  MenuItemProps as MUIMenuItemProps,
} from '@mui/material';

export type MenuItemProps = MUIMenuItemProps;

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <MUIMenuItem {...props} />;
};

export default MenuItem;
