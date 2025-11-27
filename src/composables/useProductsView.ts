import { computed } from "vue";
import { type Product } from "@entities/product";
import useProducts from "./useProducts";

type ProductsViewParams<T = Product> = {
  categoryId?: number;
  sorting?: (a: T, b: T) => number;
  filter?: (products: T[]) => T[];
  limit?: number;
  offset?: number;
};

const DEF_PRODUCTS_LIMIT = Number.POSITIVE_INFINITY;
export default function useProductsView(
  { categoryId, sorting, filter, limit, offset }: ProductsViewParams = {
    limit: DEF_PRODUCTS_LIMIT,
    offset: 0,
  }
) {
  const { isLoading, isError, result: products } = useProducts({ categoryId });

  const view = computed(() => {
    if (!products.value) return;

    // TODO products tackling...

    return products.value;
  });

  return { isLoading, isError, products: view };
}
