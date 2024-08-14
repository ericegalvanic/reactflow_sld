import Modal, { ModalProps } from '@/common/ui/Modal';
import ModalTitle from '@/common/ui/ModalTitle';

export type EdgeEditModalProps = ModalProps;

const EdgeEditModal: React.FC<EdgeEditModalProps> = (props) => {
  const { onClose, maxWidth, ...restProps } = props;

  const handleClose: NonNullable<ModalProps['onClose']> = (...args) => {
    onClose?.(...args);
  };

  return (
    <Modal onClose={handleClose} maxWidth={maxWidth ?? 'sm'} {...restProps}>
      <ModalTitle>Edit the edge</ModalTitle>
    </Modal>
  );
};

export default EdgeEditModal;
