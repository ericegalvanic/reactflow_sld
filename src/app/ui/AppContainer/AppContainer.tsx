import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import {
  AppConfigProvider,
  AppServices,
  AppServicesContext,
} from '../../context';
import { AppConfig } from '../../entities';
import { ReactNode } from 'react';
import { FlowContextProvider, PaneDrawerContextProvider } from '@/flow/context';
import OverrideStyles from '../OverrideStyles';
import { ModalProvider } from '@/common/context';
import { ReactFlowProvider } from '@xyflow/react';

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
          <ReactFlowProvider>
            <FlowContextProvider>
              <PaneDrawerContextProvider>
                <ModalProvider>
                  <OverrideStyles>
                    <CssBaseline />
                    {children}
                  </OverrideStyles>
                </ModalProvider>
              </PaneDrawerContextProvider>
            </FlowContextProvider>
          </ReactFlowProvider>
        </ThemeProvider>
      </AppServicesContext.Provider>
    </AppConfigProvider>
  );
};

export default AppContainer;
