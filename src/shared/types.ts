// biome-ignore lint/suspicious/noExplicitAny: cause it literally any
export type ErrorHandler<T = void> = (e: unknown, ...args: any[]) => T;
