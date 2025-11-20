import { ZodError, type ZodType } from "zod";
import { toast, type ExternalToast } from "vue-sonner";
import {
  AppErrorCode,
  type ApiRequest,
  type ApiStatusMessage,
} from "@app/types";
import { statusMessageSchema } from "@app/schemas";
import type { ErrorHandler } from "@shared/types";
import { appErrorHandler, inErrorBoundary } from "@shared/errorsHandling";
import AppError from "@shared/AppError";

export async function processApiRequest<
  T extends object | undefined = undefined
>(request: ApiRequest, schema: ZodType): Promise<T> {
  try {
    const response = await request();
    if (response.ok) {
      const resultRaw = await response.json();
      const result = defineResponseSchema(schema).parse(resultRaw) as
        | ApiStatusMessage
        | T;
      if (result && "message" in result) {
        throw new AppError(result.message, AppErrorCode.api, response);
      }
      return result;
    }
    throw new AppError(
      `HTTP-request ${response.status} error`,
      response.status,
      response
    );
  } catch (error) {
    if (error instanceof ZodError) {
      throw new AppError(
        "Format of the API response is incorrect",
        AppErrorCode.api,
        error
      );
    }
    throw new AppError("Unexpected API error", AppErrorCode.api, error);
  }
}

export const defineResponseSchema = (responseSchema: ZodType) =>
  responseSchema.or(statusMessageSchema);

export const errorNotification = (msg: string) =>
  showNotification("error", msg);
export const successNotification = (msg: string) =>
  showNotification("success", msg);
export const showNotification = (
  type: "success" | "info" | "warning" | "error",
  msg: string,
  params?: ExternalToast
) => toast[type](msg, params);

export const inNotificationBoundary = <T = unknown>(
  func: () => T,
  fallback?: () => T,
  message?: string
) =>
  inErrorBoundary<T>(
    func,
    fallback,
    notifyUserWithError.bind(null, undefined, message)
  );

export const notifyUserWithError: ErrorHandler = (
  err: unknown,
  message?: string
) => {
  const error = appErrorHandler(err, !!message);
  message ??= String(error);
  errorNotification(message);
};
