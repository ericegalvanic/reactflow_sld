import { config } from './config';
import { AppServices } from './context';

export type AppDependencies = {
  services: AppServices;
};

export const bootstrapDependencies = async (): Promise<AppDependencies> => {
  return {
    services: {
      appEnvironment: config.appEnvironment,
    },
  };
};
