import { DialogActions, DialogActionsProps } from '@mui/material';

export type ModalActionsProps = DialogActionsProps;

const ModalActions: React.FC<ModalActionsProps> = (props) => (
  <DialogActions {...props} />
);

export default ModalActions;
