import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { AppConfigProvider, AppServices, AppServicesContext } from '../context';
import { AppConfig } from '../entities';
import { ReactNode } from 'react';
import { PaneDrawerContextProvider } from '@/flow/context';

export type AppContainerProps = {
  bootstrapped: boolean;
  services: AppServices | undefined;
  config: AppConfig;
  theme: Theme;
  children: ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({
  bootstrapped,
  services,
  config,
  theme,
  children,
}) => {
  if (!bootstrapped) {
    return <div>Initializing App...</div>;
  }

  if (!services) {
    return <div>Failed to initialize App services!</div>;
  }

  return (
    <AppConfigProvider config={config}>
      <AppServicesContext.Provider value={services}>
        <ThemeProvider theme={theme}>
          <PaneDrawerContextProvider>
            <CssBaseline />
            {children}
          </PaneDrawerContextProvider>
        </ThemeProvider>
      </AppServicesContext.Provider>
    </AppConfigProvider>
  );
};

export default AppContainer;
