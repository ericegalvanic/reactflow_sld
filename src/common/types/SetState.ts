import { SetStateAction } from 'react';

export type SetState<S> = React.Dispatch<SetStateAction<S>>;
