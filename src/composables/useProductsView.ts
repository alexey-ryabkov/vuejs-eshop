import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { type ProductData } from "@app/types";
import { useProducts } from "./useProducts";

type ProductsViewParams = {
  categoryId?: number;
  sorting?: (a: ProductData, b: ProductData) => number;
  filter?: (
    products: ProductData,
    index?: number,
    array?: ProductData[]
  ) => boolean;
  limit?: number;
  offset?: number;
  enabled?: MaybeRefOrGetter<boolean>;
};

export default function useProductsView(
  {
    categoryId,
    sorting,
    filter,
    limit,
    offset,
    enabled,
  }: ProductsViewParams = {
    offset: 0,
  }
) {
  const {
    isLoading,
    isError,
    result: products,
  } = useProducts({ categoryId, enabled });

  const view = computed(() => {
    let result = toValue(products)!;
    if (!result) return;

    if (filter) {
      result = result.filter(filter);
    }

    if (sorting) {
      result.sort(sorting);
    }

    const from = offset ?? 0;
    const to = limit !== undefined && limit > 0 ? from + limit : undefined;
    result = result.slice(from, to);

    return result;
  });

  return { isLoading, isError, products: view };
}
