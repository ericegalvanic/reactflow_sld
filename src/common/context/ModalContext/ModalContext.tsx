import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  ModalContextData,
  ModalId,
  AppModalMap,
  ModalProviderState,
} from './ModalContext.entities';
import EdgeEditModal, { EdgeEditModalProps } from '@/flow/ui/EdgeEditModal';
import { ModalProps } from '@/common/ui/Modal';

export const ModalContext = createContext<ModalContextData>({
  open: false,
  invokeModal: () => {},
  closeModal: () => {},
});

export type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [data, setData] = useState<ModalProviderState>({});
  const [id, setId] = useState<ModalId>('NONE');
  const open = useMemo(() => id !== 'NONE', [id]);

  const providerValue = useMemo(
    (): ModalContextData => ({
      open,
      invokeModal: (id, payload) => {
        setId(id);

        if (payload) {
          setData(payload);
        }
      },
      closeModal: () => {
        setId('NONE');
        setData({});
      },
    }),
    [open]
  );

  const { onClose, ...authorizedData } = useMemo(() => data, [data]);

  const handleModalClose = useCallback<NonNullable<ModalProps['onClose']>>(
    (...args) => {
      providerValue.closeModal();
      onClose?.(...args);
    },
    [onClose, providerValue]
  );

  const delegatedData = {
    open: true,
    onClose: handleModalClose,
  } satisfies Pick<ModalProps, 'open' | 'onClose'>;

  const modalMap: AppModalMap = {
    NONE: null,
    EDIT_EDGE: (
      <EdgeEditModal
        {...delegatedData}
        {...(authorizedData as EdgeEditModalProps)}
      />
    ),
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
      {modalMap[id]}
    </ModalContext.Provider>
  );
};
