import { StoreType, ActionType, PageInterface } from '@enums';

export const initialLang: PageInterface = {
  messages: {},
};

export const actions = {
  SET_LANG: 'SET_LANG',
};

export function langReducer(state: StoreType, action: ActionType) {
  switch (action.type) {
    case actions.SET_LANG:
      return {
        ...state,
        messages: action.value,
      } as StoreType;
    default:
      return state;
  }
}
