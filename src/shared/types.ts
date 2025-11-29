// biome-ignore lint/suspicious/noExplicitAny: cause it literally any
export type ErrorHandler<T = void> = (e: unknown, ...args: any[]) => T;

export type SortingFn<T> = (a: T, b: T) => number;
export type FilterFn<T> = (products: T, index?: number, array?: T[]) => boolean;
