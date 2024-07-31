import {
  ListItemButton as MUIListItemButton,
  ListItemButtonProps as MUIListItemButtonProps,
} from '@mui/material';

export type ListItemButtonProps = MUIListItemButtonProps;

const ListItemButton: React.FC<ListItemButtonProps> = () => {
  return <MUIListItemButton />;
};

export default ListItemButton;
