import {
  MenuList as MUIMenuList,
  MenuListProps as MUIMenuListProps,
} from '@mui/material';

export type MenuListProps = MUIMenuListProps;

const MenuList: React.FC<MenuListProps> = (props) => {
  return <MUIMenuList {...props} />;
};

export default MenuList;
