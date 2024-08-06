import { List as MUIList, ListProps as MUIListProps } from '@mui/material';

export type ListProps = MUIListProps;

const List: React.FC<ListProps> = (props) => {
  return <MUIList {...props} />;
};

export default List;
