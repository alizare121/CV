export interface StoreType {
  setLang?: ({ locale, document }: { locale?: string; document?: any }) => void;
  messages?: TranslationsInterface;
}

export interface ActionType {
  type?: string;
  value?: any;
}

export interface TranslationsInterface {
  [key: string]: string[] | string;
}

export interface PageInterface {
  messages: TranslationsInterface;
}
