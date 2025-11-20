// biome-ignore-all lint/suspicious/noConfusingVoidType: cause its not
import AppError from "./AppError";
import type { ErrorHandler } from "./types";

export const inMuteErrorBoundary = <T = unknown>(
  func: () => T,
  fallback?: () => T
) => inErrorBoundary<T>(func, fallback, null);

export function inErrorBoundary<T = unknown>(
  func: () => T,
  fallback?: () => T,
  errorHandler: ErrorHandler | null = defaultErrorHandler,
  always?: () => void
):
  | T
  | void
  | (typeof errorHandler extends ErrorHandler
      ? ReturnType<typeof errorHandler>
      : void) {
  let result: T | AppError | void = undefined;
  try {
    result = func();
  } catch (funcErr) {
    if (fallback) {
      try {
        result = fallback();
      } catch (fallbackErr) {
        if (errorHandler) {
          result = errorHandler(fallbackErr);
        }
      }
    }
    if (errorHandler) {
      result = errorHandler(funcErr);
    }
  } finally {
    always?.();
  }
  return result;
}

export const defaultErrorHandler: ErrorHandler<void> = (err) => {
  appErrorHandler(err);
};

export const appErrorHandler: ErrorHandler<AppError> = (
  err,
  err2console = true
) => {
  const error = AppError.from(err);
  if (err2console) {
    console.error(`App error occurs: ${error}`);
    console.dir(error);
  }
  return error;
};
