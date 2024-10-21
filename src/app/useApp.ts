import { useCallback, useState } from 'react';
import { AppServices } from './context';
import { bootstrapDependencies } from './bootstrapDependencies';
import { useBoolean, useEffectOnce } from '@/common/hooks';
import { config } from './config';
import { appTheme } from './theme';

export const useApp = () => {
  const [appServices, setAppServices] = useState<AppServices>();
  const [bootstrapped, setBootstrapped] = useBoolean();

  const bootstrap = useCallback(async () => {
    const appDependencies = await bootstrapDependencies();

    setAppServices(appDependencies.services);
    setBootstrapped(true);
  }, [setBootstrapped]);

  useEffectOnce(() => {
    bootstrap();
  });

  return {
    services: appServices,
    config: config,
    bootstrapped,
    theme: appTheme,
  };
};
