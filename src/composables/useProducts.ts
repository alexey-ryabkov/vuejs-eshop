import { type Ref } from "vue";
import {
  useProducts as useProductsBase,
  useProduct as useProductBase,
} from "@entities/product";
import { processProduct } from "@app/utils";
import { useProcessingWithMinDuration } from "@composables";
import type { ProductData } from "@app/types";

export function useProducts(args: { productId: number; categoryId?: number }): {
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
  result: Ref<ProductData | undefined>;
};
export function useProducts(args?: {
  productId?: undefined;
  categoryId?: number;
}): {
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
  result: Ref<ProductData[] | undefined>;
};
export function useProducts({
  categoryId,
  productId,
}: {
  categoryId?: number;
  productId?: number;
} = {}) {
  const { isError, data } = productId
    ? useProductBase(productId)
    : useProductsBase(categoryId);

  const { isLoading, result } = useProcessingWithMinDuration<ProductData>(
    data,
    processProduct
  );

  return { isLoading, isError, result };
}
