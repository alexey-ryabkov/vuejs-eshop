import { inject, toValue } from "vue";
import {
  useProductsView,
  useCategoryRoute,
  useCategoryFilter,
} from "@composables";

export default function useCategoryFilteredProducts() {
  const { id, page, sorting } = useCategoryRoute();
  const filter = useCategoryFilter();

  const itemsPerPage = inject("items_per_page", 10);
  return useProductsView({
    categoryId: toValue(id),
    sorting,
    filter,
    limit: itemsPerPage,
    offset: itemsPerPage ? () => (toValue(page) - 1) * itemsPerPage : undefined,
  });
}
