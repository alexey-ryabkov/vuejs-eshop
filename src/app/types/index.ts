import type { BREAKPOINS, PRODUCTS_CATEGORY_SORTINGS } from "@app/constants";
import type { processProduct } from "@app/utils";
import type { FilterFn, SortingFn } from "@shared/types";

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

export type CartItemProduct = ProductData & CartItem;

export type SortingProductsFn = SortingFn<ProductData>;
export type FilterProductsFn = FilterFn<ProductData>;

export type ProductsCategorySorting = keyof typeof PRODUCTS_CATEGORY_SORTINGS;

export type BreakpointFlags = Record<keyof typeof BREAKPOINS, boolean>;
