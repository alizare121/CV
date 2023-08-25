import { createContext } from 'react';
import { combineStates } from './combineStates';
import { LanguageWatcher } from './language/action';

const store: any = createContext(combineStates);

function StoreProvider({ children }: any) {
  const value = {
    ...LanguageWatcher(),
  };
  return <store.Provider {...{ value }}>{children}</store.Provider>;
}

export { store, StoreProvider };
