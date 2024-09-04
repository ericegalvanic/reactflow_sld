import { Dialog, DialogProps } from '@mui/material';

export type ModalProps = DialogProps;

const Modal: React.FC<ModalProps> = (props) => <Dialog {...props} />;

export default Modal;
