import create from 'zustand';
import type { IAppStore } from './interfaces';

const appStore = create<IAppStore>(set => ({
  postLoginNavigator: 'Home',
  setPostLogin: navigator => set(() => ({ postLoginNavigator: navigator })),
}));

export const useAppStore = () => appStore(state => state);
