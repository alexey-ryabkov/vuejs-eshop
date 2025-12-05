import { computed, toValue, type Ref } from "vue";

import type { FilterParams, ProductData } from "@types";
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

  const filterItems = computed<Record<FilterCode, FilterItem> | undefined>({
    get: () => {
      const filterItemsRaw = products.value
        ? Object.values(buildFilterItems(products.value))
        : undefined;
      return filterItemsRaw?.length
        ? filterItemsRaw.reduce((result, item) => {
            const filterItem = item.filter;
            const filterCode = item.code;
            const filterValue = filter.value?.[filterCode];
            if (filterValue) {
              let value;
              if (filterItem instanceof RangeFilter) {
                const { min, max } = filterValue as {
                  min: string | number;
                  max: string | number;
                };
                value = [toNumber(min) ?? NaN, toNumber(max) ?? NaN];
              } else if (filterItem instanceof CheckboxesFilter) {
                value = castArray(filterValue).map((v: unknown) =>
                  String(v).trim()
                );
              } else if (filterItem instanceof RadioButtonsFilter) {
                value = String(filterValue).trim();
              } else if (filterItem instanceof ToggleFilter) {
                value = !!filterValue;
              }
              if (value) {
                filterItem.value = value;
              }
            }
            return { ...result, [filterCode]: { ...item } };
          }, {})
        : undefined;
    },
    set: (filterItems) => {
      const nextFilter: FilterParams = {};
      if (filterItems) {
        Object.values(filterItems).forEach(({ filter }) => {
          if (filter.isActive) {
            let filterValue;
            const { code, value } = filter;
            if (filter instanceof RangeFilter) {
              const [min, max] = value as [number, number];
              filterValue = { min, max };
            } else {
              filterValue = value as string[] | number | boolean;
            }
            nextFilter[code] = filterValue;
          }
        });
      }
      filter.value = nextFilter;
    },
  });
  return filterItems;
}
