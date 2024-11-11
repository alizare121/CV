import { useReducer } from 'react';
import { actions, langReducer, initialLang } from './reducer';

export const LanguageWatcher = () => {
  const [state, dispatch] = useReducer(langReducer, initialLang);
  return {
    ...state,
    setLang: async ({ locale, document }: any) => {
      try {
        const html: any = document.getElementsByTagName('html')[0];
        const HTMLDirection: string = locale === 'fa' ? 'rtl' : 'ltr';
        const res = await Object.assign(
          {},
          require(`../../assets/dictionary/${locale}.json`)
        );
        html.style.direction = HTMLDirection;
        dispatch({ type: actions.SET_LANG, value: res });
      } catch (error) {
        console.log(error);
      }
    },
  };
};
