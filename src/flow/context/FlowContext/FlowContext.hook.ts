import { useContext } from 'react';
import { FlowContext } from './FlowContext';

export const useFlow = () => useContext(FlowContext);
