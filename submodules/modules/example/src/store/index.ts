import create from 'zustand';
import type { IModuleStore } from './interfaces';

export const useModuleStore = create<IModuleStore>(set => ({
  value: null,
  changeValue: newValue => set({ value: newValue }),
}));
