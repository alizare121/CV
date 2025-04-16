import { createContext, ReactNode } from 'react';
import { LanguageWatcher } from './language/action';
import { StoreType } from 'src/types';

import { initialLang } from './language/reducer';

const store = createContext<StoreType>({ ...initialLang });

function StoreProvider({ children }: { children: ReactNode }) {
  const value = {
    ...LanguageWatcher(),
  };

  return <store.Provider value={value}>{children}</store.Provider>;
}

export { store, StoreProvider };
