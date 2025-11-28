import type { processProduct } from "@app/utils";

export * from "@shared/types";

export enum AppErrorCode {
  unknown = 0,
  dev = 100,
  user = 200,
  api = 300,
  apiClient = 400,
  apiServer = 500,
}

export type ProductData = ReturnType<typeof processProduct>;

export type CartItem = {
  id: number;
  quantity: number;
};
