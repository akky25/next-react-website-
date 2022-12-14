export type ConvertPropType<T, K extends keyof T, U> = {
  [P in keyof T]: P extends K ? U : T[P];
};
