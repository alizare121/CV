export interface StoreType {
  setLang?: ({
    locale,
    document,
  }: {
    locale: string;
    document: Document;
  }) => void;
  messages: TranslationsInterface;
}

export interface ActionType {
  type: string;
  value: TranslationsInterface;
}

export interface TranslationsInterface {
  [key: string]: string[] | string;
}

export interface PageInterface {
  messages: TranslationsInterface;
}
