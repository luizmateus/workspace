export type ISetStore<T> = (state: T | Partial<T> | ((state: T) => T | Partial<T>)) => void;
