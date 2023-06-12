export interface StoreType {
  setLang?: ({ locale, document }: { locale?: string; document?: any }) => void;
  messages?: any;
}

export interface ActionType {
  type?: string;
  value?: any;
}