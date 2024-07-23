import { AppEnvironment } from './AppEnvironment';

export type AppConfig = {
  appName: string;
  appVersion: string;
  appEnvironment: AppEnvironment;
  apiUrl: string;
};
