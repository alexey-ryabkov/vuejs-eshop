import type { z } from "zod";
import type {
  categoriesListSchema,
  productSchema,
  productsListSchema,
  statusMessageSchema,
} from "@app/schemas";

export type CategoriesList = z.infer<typeof categoriesListSchema>;
export type Product = z.infer<typeof productSchema>;
export type ProductsList = z.infer<typeof productsListSchema>;
export type ApiStatusMessage = z.infer<typeof statusMessageSchema>;

export type ApiRequest = () => Promise<Response>;
export type ApiResponse<T extends object | undefined = undefined> =
  T extends undefined ? ApiStatusMessage : T | ApiStatusMessage;

export enum AppErrorCode {
  unknown = 0,
  dev = 100,
  user = 200,
  api = 300,
  apiClient = 400,
  apiServer = 500,
}
