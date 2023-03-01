import create from 'zustand';
import type { IAuthStore } from './interfaces';
import type { IAuthSession } from './interfaces/IAuthSession';

export const useAuthStore = create<IAuthStore>(() => ({
  loggedIn: false,
  session: {} as IAuthSession,
}));
