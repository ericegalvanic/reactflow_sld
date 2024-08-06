import { useContext } from 'react';
import { PaneDrawerContext } from '../PaneDrawerContext';

export const usePaneDrawerContext = () => useContext(PaneDrawerContext);
