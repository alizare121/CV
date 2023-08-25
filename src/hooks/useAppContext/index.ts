import { useContext } from 'react';
import { store } from '../../storage';
import { StoreType } from '@enums';

export const useAppContext = (): StoreType => {
  return useContext<StoreType>(store);
};
