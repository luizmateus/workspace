export interface IAppStore {
  /** Navegador do pós-login (módulo a ser carregado após o login). */
  postLoginNavigator: string;
  /** Mudar o navegador do pós-login. */
  setPostLogin: (navigator: string) => void;
}
