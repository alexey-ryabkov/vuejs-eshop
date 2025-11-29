import { toValue, type Ref } from "vue";
import type { ProductsCategorySorting } from "@app/types";
import { isProductAvailiable } from "@app/utils";
import { useProductsView, useCategoryRoute } from "@composables";

export default function useCategoryProducts(count?: number) {
  const { id, page, sorting } = useCategoryRoute();
  return useProductsView({
    categoryId: toValue(id),
    sorting: sorting as Ref<ProductsCategorySorting>,
    // TODO while no filter func
    filter: isProductAvailiable,
    limit: count,
    offset: count ? () => (toValue(page) - 1) * count : undefined,
  });
}
