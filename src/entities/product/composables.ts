import { useQuery, type QueryObserverOptions } from "@tanstack/vue-query";
import { inQueryBoundary } from "@app/utils";
import { fetchProductData, fetchProducts } from "./api";

export function useProducts(
  categoryId?: number,
  opts?: Partial<QueryObserverOptions>
) {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => inQueryBoundary(() => fetchProducts(categoryId)),
    refetchOnWindowFocus: false,
    retry: false,
    ...opts,
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => inQueryBoundary(() => fetchProductData(id)),
    refetchOnWindowFocus: false,
    enabled: !!id && id > 0,
    retry: false,
  });
}
