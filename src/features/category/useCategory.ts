import { toValue } from "vue";
import { isProductAvailiable } from "@app/utils";
import { useCachedProducts, useCategoryRoute } from "@composables";

export default function useCategory() {
  const { id, page, sorting } = useCategoryRoute();
  const { isLoading, isError, products } = useCachedProducts({
    categoryId: toValue(id),
    filter: isProductAvailiable,
  });
  return { id, isLoading, isError, products, page, sorting };
}
