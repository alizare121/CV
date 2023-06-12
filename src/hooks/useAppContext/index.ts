import { useContext } from 'react';
import { store } from '../../storage';
import {StoreType} from '@enums';

export const useAppContext = (): any => {
  return useContext(store);
};
