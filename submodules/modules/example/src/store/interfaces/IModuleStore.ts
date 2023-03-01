export interface IModuleStore {
  /** Valor. */
  value: any;
  /** Ação. */
  changeValue: (newValue: any) => void;
}
