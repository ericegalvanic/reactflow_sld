import {
  ListItem as MUIListItem,
  ListItemProps as MUIListItemProps,
} from '@mui/material';

export type ListItemProps = MUIListItemProps;

const ListItem: React.FC<ListItemProps> = (props) => {
  return <MUIListItem {...props} />;
};

export default ListItem;
