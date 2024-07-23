import { AppConfig } from './entities';

export const config = {
  appName: 'React Flow App',
  appVersion: '0.0.0',
  appEnvironment: import.meta.env.VITE_APP_ENVIRONMENT ?? 'local',
  apiUrl: import.meta.env.VITE_API_URL ?? '',
} as const satisfies AppConfig;