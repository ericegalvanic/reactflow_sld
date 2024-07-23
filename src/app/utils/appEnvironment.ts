import { AppConfig } from '../entities';

export const isAppEnvironmentLocal = (config: AppConfig) => {
  return config.appEnvironment === 'local';
};

export const isAppEnvironmentStage = (config: AppConfig) => {
  return config.appEnvironment === 'stage';
};

export const isAppEnvironmentProduction = (config: AppConfig) => {
  return config.appEnvironment === 'production';
};
