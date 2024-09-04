import { SetStateAction, Dispatch } from 'react';

export type SetState<S> = Dispatch<SetStateAction<S>>;
