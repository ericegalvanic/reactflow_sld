import { Empty } from '@/common/entities';
import { EdgeEditModalProps } from '@/flow/ui/EdgeEditModal/EdgeEditModal';
import { ReactNode } from 'react';

export type OpenDelegated<T> = Omit<T, 'open'>;

export type AppModalProps = {
  NONE: never;
  EDIT_EDGE: OpenDelegated<EdgeEditModalProps>;
};

export type ModalId = keyof AppModalProps;

export type AppModalMap = Record<ModalId, ReactNode>;

export type ModalContextData = {
  open: boolean;
  invokeModal: <M extends ModalId>(id: M, payload?: AppModalProps[M]) => void;
  closeModal: () => void;
};

export type ModalProviderState = AppModalProps[ModalId] | Empty;
