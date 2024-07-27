import {
  ListItemIcon as MUIListItemIcon,
  ListItemIconProps as MUIListItemIconProps,
} from '@mui/material';

export type ListItemIconProps = MUIListItemIconProps;

const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  return <MUIListItemIcon {...props} />;
};

export default ListItemIcon;
