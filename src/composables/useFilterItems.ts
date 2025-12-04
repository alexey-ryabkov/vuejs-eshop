import { computed, toRef, toValue, watchEffect, type Ref } from "vue";

import type { ProductData } from "@types";
import {
  buildFilterItems,
  CheckboxesFilter,
  RadioButtonsFilter,
  ToggleFilter,
  RangeFilter,
} from "@entities/filter";
import type { FilterCode, FilterItem } from "@entities/filter";
import { castArray, toNumber } from "@utils";
import useCategoryRoute from "./useCategoryRoute";
import useCachedProducts from "./useCachedProducts";
import { useProducts } from "./useProducts";

export default function useFilterItems() {
  const { id, filter } = useCategoryRoute();
  const categoryId = computed(() => toValue(id) || 0);

  let products: Ref<ProductData[] | undefined>;
  if (categoryId) {
    ({ products } = useCachedProducts({
      categoryId: toValue(id),
    }));
  } else {
    ({ result: products } = useProducts());
  }

  const filterItems = computed<Record<FilterCode, FilterItem> | undefined>(
    () => {
      const filterItemsRaw = products.value
        ? Object.values(buildFilterItems(products.value))
        : undefined;
      return filterItemsRaw?.length
        ? filterItemsRaw.reduce((result, item) => {
            const filter = item.filter;
            const ref = toRef(filter, "value");
            return { ...result, [item.code]: { ...item, filter, ref } };
          }, {})
        : undefined;
    }
  );

  watchEffect(() => {
    Object.entries(filter.value).forEach(([code, filterValue]) => {
      if (filterItems.value && code in filterItems.value) {
        let value;
        const { filter } = filterItems.value[code];
        if (filter instanceof RangeFilter) {
          const { min, max } = filterValue as {
            min: string | number;
            max: string | number;
          };
          value = [toNumber(min) ?? NaN, toNumber(max) ?? NaN];
        } else if (filter instanceof CheckboxesFilter) {
          value = castArray(filterValue).map((v) => String(v).trim());
        } else if (filter instanceof RadioButtonsFilter) {
          value = String(filterValue).trim();
        } else if (filter instanceof ToggleFilter) {
          value = !!filterValue;
        } else return;
        filterItems.value[code].filter.value = value;
      }
    });
  });

  return filterItems;
}
