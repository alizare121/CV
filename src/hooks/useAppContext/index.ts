import { useContext } from 'react';
import { store } from '../../stores';
import { StoreType } from 'src/types';

export const useAppContext = (): StoreType => {
  return useContext<StoreType>(store);
};
