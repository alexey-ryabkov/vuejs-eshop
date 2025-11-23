// biome-ignore-all lint/suspicious/noConfusingVoidType: cause its not
import AppError from "./AppError";
import type { ErrorHandler } from "./types";

export const inMuteErrorBoundary = <T = unknown>(
  func: () => T,
  fallback?: () => T
) => inErrorBoundary<T>(func, fallback, null);

export async function inErrorBoundary<T = unknown>(
  func: () => T | Promise<T>,
  fallback?: () => T | Promise<T>,
  errorHandler: ErrorHandler | null = defaultErrorHandler,
  always?: () => void | Promise<void>
): Promise<T | ReturnType<ErrorHandler> | void> {
  try {
    return await func();
  } catch (funcErr) {
    if (fallback) {
      try {
        return await fallback();
      } catch (fallbackErr) {
        if (errorHandler) {
          return errorHandler(fallbackErr);
        }
      }
    }
    if (errorHandler) {
      return errorHandler(funcErr);
    }
  } finally {
    await always?.();
  }
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
