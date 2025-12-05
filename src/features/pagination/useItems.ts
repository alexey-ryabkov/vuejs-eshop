import {
  useCategoryRoute,
  useProductsView,
  useCategoryFilter,
} from "@composables";
import { computed, toValue } from "vue";

export default function useItems() {
  const { id, page } = useCategoryRoute();
  const filter = useCategoryFilter();

  const {
    isLoading,
    isError,
    products: items,
  } = useProductsView({
    categoryId: toValue(id),
    filter,
  });

  const itemsCount = computed(() => items.value?.length || 0);

  return { isLoading, isError, items, itemsCount, page };
}
