export interface StoreType {
  setLang?: ({ locale, document }: { locale?: string; document?: any }) => void;
  setMenuRoutes?: ({ locale }: { locale?: string }) => void;
  locale?: string;
  messages?: any;
  result?: any;
  ServerContextJSONValue?:any;
}

export interface ActionType {
  type?: string;
  value?: any;
}