import { createContext, ReactNode } from 'react';
import { AppConfig } from '../entities';
import { config } from '../config';

export const AppConfigContext = createContext<AppConfig>(config);

export type AppConfigProviderProps = {
  config: AppConfig;
  children?: ReactNode;
};

export const AppConfigProvider: React.FC<AppConfigProviderProps> = ({
  config,
  children,
}) => {
  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};
