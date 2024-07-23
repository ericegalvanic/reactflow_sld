import { AppEnvironment } from '@/app/entities';
import { createContext } from 'react';

export type AppServices = {
  appEnvironment: AppEnvironment;
};

const initialServices = {
  appEnvironment: 'local',
} satisfies AppServices;

export const AppServicesContext = createContext<AppServices>(initialServices);
