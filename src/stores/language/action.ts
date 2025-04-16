import { useReducer } from 'react';
import { actions, langReducer, initialLang } from './reducer';

export const LanguageWatcher = () => {
  const [state, dispatch] = useReducer(langReducer, initialLang);
  return {
    ...state,
    setLang: async ({
      locale,
      document,
    }: {
      locale: string;
      document: Document;
    }) => {
      try {
        const html: HTMLHtmlElement = document.getElementsByTagName('html')[0];
        const HTMLDirection: string = locale === 'fa' ? 'rtl' : 'ltr';
        const res = await import(`../../assets/dictionary/${locale}.json`);
        html.style.direction = HTMLDirection;
        dispatch({ type: actions.SET_LANG, value: res });
      } catch (error) {
        console.log(error);
      }
    },
  };
};
