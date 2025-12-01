import { computed } from "vue";
import { useProductsView } from "@composables";
import { useStore } from "@app/store";
import type { ProductData } from "@types";

export default function useFavorites() {
  const store = useStore();
  const hasFavorites = computed(() => store.favorites.length > 0);

  const {
    isLoading: isProductsLoading,
    isError: isProductsError,
    products,
  } = useProductsView({
    filter: ({ id }: ProductData) => store.isFavorite(id),
    enabled: hasFavorites,
  });

  const isLoading = computed(() =>
    hasFavorites.value ? isProductsLoading.value : false
  );
  const isError = computed(() =>
    hasFavorites.value ? isProductsError.value : false
  );
  const favorites = computed(() => {
    if (!hasFavorites.value || !products.value) return [];
    return store.favorites.map(
      (id) => products.value!.find(({ id: productId }) => productId == id)!
    );
  });

  return { isLoading, isError, favorites };
}
