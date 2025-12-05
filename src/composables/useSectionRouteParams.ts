import qs from "qs";
import { computed, inject } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useDebounceFn } from "@vueuse/core";
import type { FilterParams, ProductsCategorySorting } from "@types";

const DEBOUNCE_SYNC_MS = 250;

type SectionRouteParams = {
  filter?: FilterParams;
  sorting?: ProductsCategorySorting;
  page?: number;
};

export default function useSectionRouteParams() {
  const route = useRoute();
  const router = useRouter();

  const filter = computed<FilterParams>({
    get: () => {
      const filterQuery = route.query.filter;
      if (!filterQuery) return {} as FilterParams;

      try {
        if (typeof filterQuery === "string") {
          return qs.parse(filterQuery) as FilterParams;
        }
        return filterQuery as FilterParams;
      } catch {
        return {} as FilterParams;
      }
    },
    set: (filter: FilterParams) => {
      syncDebounced({ filter })();
    },
  });

  const defSorting = inject("default_sorting", "");
  const sorting = computed<ProductsCategorySorting>({
    get: () => (route.query.sorting ?? defSorting) as ProductsCategorySorting,
    set: (sorting) => {
      syncDebounced({ sorting })();
    },
  });

  const page = computed<number>({
    get: () => {
      const pageValue = route.query.page;
      return pageValue ? Number(pageValue) : 1;
    },
    set: (page) => {
      syncDebounced({ page })();
    },
  });

  const sync = ({ filter: f, sorting, page }: SectionRouteParams) => {
    const query: Record<string, any> = { ...route.query };

    if (f !== undefined) {
      if (f == null || (typeof f === "object" && Object.keys(f).length === 0)) {
        delete query.filter;
      } else {
        query.filter = qs.stringify(f, { encode: true, arrayFormat: "repeat" });
      }
    }

    if (sorting !== undefined) {
      if (sorting) {
        query.sorting = sorting;
      } else {
        delete query.sorting;
      }
    }

    if (page !== undefined) {
      if (page > 1) {
        query.page = String(page);
      } else {
        delete query.page;
      }
    }

    Object.keys(query).forEach((key) => {
      if (query[key] === undefined || query[key] === null) {
        delete query[key];
      }
    });

    router.replace({ query }).catch(() => {
      // TODO...
    });
  };

  const syncDebounced = (query: SectionRouteParams) =>
    useDebounceFn(() => sync(query), DEBOUNCE_SYNC_MS);

  return {
    filter,
    sorting,
    page,
  };
}
