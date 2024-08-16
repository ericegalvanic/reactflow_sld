import { useContext } from 'react';
import { PaneDrawerContext } from '../PaneDrawerContext/PaneDrawerContext';

export const usePaneDrawerContext = () => useContext(PaneDrawerContext);
