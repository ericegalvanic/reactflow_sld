import { useContext } from 'react';
import { AppServicesContext } from '../AppServicesContext';

export const useAppServices = () => useContext(AppServicesContext);
