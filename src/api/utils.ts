import { ZodError, type ZodType } from "zod";
import AppError from "@shared/AppError";
import { AppErrorCode } from "@app/types";
import type { ApiRequest, ApiStatusMessage } from "./types";
import { statusMessageSchema } from "./schemas";

const defineResponseSchema = (responseSchema: ZodType) =>
  responseSchema.or(statusMessageSchema);

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
      // const parsed = defineResponseSchema(schema).safeParse(resultRaw);
      // if (!parsed.success) {/* handle error in-place */ return;}
      // const result = parsed.data
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
