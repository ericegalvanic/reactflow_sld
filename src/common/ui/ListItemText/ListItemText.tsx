import {
  ListItemText as MUIListItemText,
  ListItemTextProps as MUIListItemTextProps,
} from '@mui/material';

export type ListItemTextProps = MUIListItemTextProps;

const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <MUIListItemText {...props} />;
};

export default ListItemText;
