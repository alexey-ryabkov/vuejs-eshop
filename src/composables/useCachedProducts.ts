import { watchEffect } from "vue";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import type { FilterProductsFn, ProductData, SortingProductsFn } from "@types";
import useProductsView from "./useProductsView";

export default function useCachedProducts({
  name,
  categoryId,
  sorting,
  filter,
  count,
  staleTime = Number.POSITIVE_INFINITY,
  keys,
}: {
  name?: string;
  categoryId?: number;
  sorting?: SortingProductsFn;
  filter?: FilterProductsFn;
  count?: number;
  staleTime?: number;
  keys?: string[];
}) {
  const qc = useQueryClient();
  const cacheKey = [
    count || "all",
    `${name}_products` || (categoryId ? `category-${categoryId}` : "catalog"),
    ...(keys ? keys : []),
  ];
  const cached = qc.getQueryData<ProductData[]>(cacheKey);

  const { isLoading, isError, products } = useProductsView({
    categoryId,
    sorting,
    filter,
    limit: count,
  });

  watchEffect(() => {
    if (!isError.value && products.value) {
      qc.setQueryData(cacheKey, products.value);
    }
  });

  const { data } = useQuery({
    queryKey: cacheKey,
    queryFn: () => qc.getQueryData<ProductData[]>(cacheKey) ?? [],
    initialData: cached,
    staleTime,
  });

  return { isLoading, isError, products: data };
}
