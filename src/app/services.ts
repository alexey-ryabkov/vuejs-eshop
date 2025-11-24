import { useQuery } from "@tanstack/vue-query";
import { fetchCategories, fetchProductData, fetchProducts } from "@app/api";
import { inQueryBoundary } from "@app/utils";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => inQueryBoundary(fetchCategories),
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useProducts(categoryId?: number) {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => inQueryBoundary(() => fetchProducts(categoryId)),
    // staleTime: 1_000 * 60,
    // gcTime: 300_000,
    refetchOnWindowFocus: false,
    retry: false,
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
