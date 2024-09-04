import { DialogTitle, DialogTitleProps } from '@mui/material';

export type ModalTitleProps = DialogTitleProps;

const ModalTitle: React.FC<ModalTitleProps> = (props) => (
  <DialogTitle {...props} />
);

export default ModalTitle;
