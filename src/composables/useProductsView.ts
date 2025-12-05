import {
  computed,
  toValue,
  unref,
  type MaybeRef,
  type MaybeRefOrGetter,
} from "vue";

import type {
  FilterProductsFn,
  ProductsCategorySorting,
  SortingProductsFn,
} from "@types";
import { getSortingFn } from "@utils";
import { useProducts } from "./useProducts";

type ProductsViewParams = {
  categoryId?: number;
  sorting?: MaybeRef<SortingProductsFn | ProductsCategorySorting>;
  filter?: MaybeRef<FilterProductsFn | undefined>;
  limit?: number;
  offset?: MaybeRefOrGetter<number>;
  enabled?: MaybeRefOrGetter<boolean>;
};

export default function useProductsView(
  {
    categoryId,
    sorting: sortingRaw,
    filter: filterRaw,
    limit,
    offset: offsetRaw,
    enabled,
  }: ProductsViewParams = {
    offset: 0,
  }
) {
  const {
    isLoading,
    isError,
    result: productsRaw,
  } = useProducts({ categoryId, enabled });

  const view = computed(() => {
    let products = toValue(productsRaw)!;
    if (!products) return;

    let result = products.slice();

    const filter = unref(filterRaw);
    if (filter) {
      result = result.filter(filter);
    }

    const sorting = unref(sortingRaw);
    if (sorting) {
      result.sort(typeof sorting == "string" ? getSortingFn(sorting) : sorting);
    }

    const from = toValue(offsetRaw) ?? 0;
    const to = limit !== undefined && limit > 0 ? from + limit : undefined;
    result = result.slice(from, to);

    return result;
  });

  return { isLoading, isError, products: view };
}
