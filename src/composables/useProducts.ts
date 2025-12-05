import { type MaybeRefOrGetter, type Ref } from "vue";

import {
  useProducts as useProductsBase,
  useProduct as useProductBase,
} from "@entities/product";
import { processProduct } from "@utils";
import type { ProductData } from "@types";
import useProcessingWithMinDuration from "./useProcessingWithMinDuration";

type UseProductsArgs = {
  categoryId?: number;
  productId?: number;
  enabled?: MaybeRefOrGetter<boolean>;
};

export function useProducts(args: UseProductsArgs & { productId: number }): {
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
  result: Ref<ProductData | undefined>;
};
export function useProducts(
  args?: UseProductsArgs & { productId?: undefined }
): {
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
  result: Ref<ProductData[] | undefined>;
};
export function useProducts({
  categoryId,
  productId,
  enabled,
}: UseProductsArgs = {}) {
  const { isError, data } = productId
    ? useProductBase(productId, { enabled })
    : useProductsBase(categoryId, { enabled });

  const { isLoading, result } = useProcessingWithMinDuration<ProductData>(
    data,
    processProduct
  );

  return { isLoading, isError, result };
}
