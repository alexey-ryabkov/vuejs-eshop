import type z from "zod";
import type { statusMessageSchema } from "./schemas";

export type ApiStatusMessage = z.infer<typeof statusMessageSchema>;
export type ApiRequest = () => Promise<Response>;
export type ApiResponse<T extends object | undefined = undefined> =
  T extends undefined ? ApiStatusMessage : T | ApiStatusMessage;
