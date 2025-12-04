import { computed } from "vue";

import type { ProductData } from "@types";
import useFilterItems from "./useFilterItems";

export default function useCategoryFilter() {
  const filterItems = useFilterItems();

  return computed(() => {
    return filterItems.value
      ? (product: ProductData) =>
          Object.values(filterItems.value!)
            .filter(({ filter }) => filter.isActive)
            .every(({ filter }) => filter.apply(product))
      : undefined;
  });
}
