import { useModal } from '@/common/context/hooks';
import { Retyped } from '@/common/types';
import { EdgeEditModalProps } from './EdgeEditModal';
import { ModalContextData, OpenDelegated } from '@/common/context';

type UseEdgeEditModalReturn = Retyped<
  ModalContextData,
  'invokeModal',
  (payload: OpenDelegated<EdgeEditModalProps>) => void
>;

export const useEdgeEditModal = (): UseEdgeEditModalReturn => {
  const { invokeModal, closeModal, open } = useModal();

  const invokeModalWithId: UseEdgeEditModalReturn['invokeModal'] = (
    payload
  ) => {
    invokeModal('EDIT_EDGE', payload);
  };

  return {
    open,
    invokeModal: invokeModalWithId,
    closeModal,
  };
};
