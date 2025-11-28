import type { MaybeRefOrGetter } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { inQueryBoundary } from "@app/utils";
import { fetchProductData, fetchProducts } from "./api";

export function useProducts(
  categoryId?: number,
  opts?: {
    enabled?: MaybeRefOrGetter<boolean>;
    // ...
  }
) {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => inQueryBoundary(() => fetchProducts(categoryId)),
    refetchOnWindowFocus: false,
    retry: false,
    ...opts,
  });
}

export function useProduct(
  id: number,
  opts?: {
    enabled?: MaybeRefOrGetter<boolean>;
    // ...
  }
  // opts?: Partial<
  //   QueryObserverOptions<Awaited<ReturnType<typeof fetchProductData>> | void>
  // >
) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => inQueryBoundary(() => fetchProductData(id)),
    refetchOnWindowFocus: false,
    retry: false,
    ...opts,
  });
}
