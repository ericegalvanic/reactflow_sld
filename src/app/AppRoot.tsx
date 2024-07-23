import '@xyflow/react/dist/style.css';
import AppContainer from './ui/AppContainer';
import HomePage from '@/flow/pages/HomePage';
import { useApp } from './useApp';

export const AppRoot: React.FC = () => {
  const { bootstrapped, config, services, theme } = useApp();

  return (
    <AppContainer
      bootstrapped={bootstrapped}
      services={services}
      config={config}
      theme={theme}
    >
      <HomePage />
    </AppContainer>
  );
};

export default AppRoot;
