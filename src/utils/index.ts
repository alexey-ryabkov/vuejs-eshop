import { toast, type ExternalToast } from "vue-sonner";
import type { ErrorHandler } from "@shared/types";
import { appErrorHandler, inErrorBoundary } from "@shared/utils";
import { withMinDuration } from "@shared/utils";

export * from "@shared/utils";
export * from "./products";

export const errorNotification = (msg: string) =>
  showNotification("error", msg);
export const successNotification = (msg: string) =>
  showNotification("success", msg);
export const showNotification = (
  type: "success" | "info" | "warning" | "error",
  msg: string,
  params?: ExternalToast
) => toast[type](msg, params);

export const processQuery = <T = void>(
  fetchFn: () => Promise<T>,
  duration = 300
) => withMinDuration(() => inQueryBoundary(fetchFn), duration);

export const inQueryBoundary = <T = void>(fetchFn: () => Promise<T>) =>
  inErrorBoundary<T>(
    () => fetchFn(),
    undefined,
    (rawError: unknown) => {
      const error = appErrorHandler(rawError);
      error.original && console.error(error.original);
      errorNotification(error.message);
      return [];
    }
  );

export const inNotificationBoundary = <T = unknown>(
  func: () => T | Promise<T>,
  fallback?: () => T | Promise<T>,
  message?: string
) =>
  inErrorBoundary<T>(
    func,
    fallback,
    message
      ? notifyUserWithError.bind(null, undefined, message)
      : notifyUserWithError
  );

export const notifyUserWithError: ErrorHandler = (
  err: unknown,
  message?: string
) => {
  const error = appErrorHandler(err, !!message);
  message ??= String(error);
  errorNotification(message);
};
