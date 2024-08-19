import { useAppConfig } from '@/app/context/hooks';
import { useStateWithHistory as useStateWithHistoryFromLib } from 'react-use';

export const useStateWithHistory = <S>(initialState: S | (() => S)) => {
  const { historyDeepness } = useAppConfig();
  return useStateWithHistoryFromLib(initialState, historyDeepness);
};
