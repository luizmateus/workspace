import type { IAuthSession } from './IAuthSession';

export interface IAuthStore {
  /** Usuário está logado? */
  loggedIn: boolean;
  /** Objeto de sessão do usuário. */
  session: IAuthSession;
}
