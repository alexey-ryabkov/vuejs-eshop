import { computed } from "vue";
import { useProductsView } from "@composables";
import { useStore } from "@app/store";
import type { ProductData } from "@types";

export default function useCartItems() {
  const store = useStore();
  const hasCartItems = computed(() => store.cart.length > 0);

  const {
    isLoading: isProductsLoading,
    isError: isProductsError,
    products,
  } = useProductsView({
    filter: ({ id }: ProductData) => store.isInCart(id),
    enabled: hasCartItems,
  });

  const isLoading = computed(() =>
    hasCartItems.value ? isProductsLoading.value : false
  );
  const isError = computed(() =>
    hasCartItems.value ? isProductsError.value : false
  );
  const items = computed(() => {
    if (!hasCartItems.value || !products.value) return [];
    return store.cart.map(({ id, quantity }) => ({
      ...products.value!.find(({ id: productId }) => productId == id)!,
      ...{ quantity },
    }));
  });

  return { isLoading, isError, items };
}
