import qs from "qs";
import { computed, inject } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useDebounceFn } from "@vueuse/core";
import type { ProductsCategorySorting } from "@types";

const DEBOUNCE_SYNC_MS = 250;

type FilterParams = {
  [key: string]: string | string[] | number | boolean | FilterParams;
};

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
      const parsed = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      return (parsed.filter ?? {}) as FilterParams;
    },
    set: (filter: FilterParams) => {
      // sync({ filter });
      syncDebounced({ filter })();
    },
  });

  const defSorting = inject("default_sorting", "");
  const sorting = computed<ProductsCategorySorting>({
    get: () => (route.query.sorting ?? defSorting) as ProductsCategorySorting,
    set: (sorting) => {
      // sync({ sorting });
      syncDebounced({ sorting })();
    },
  });

  const page = computed<number>({
    get: () => Number(route.query.page ?? 1),
    set: (page) => {
      // sync({ page });
      syncDebounced({ page })();
    },
  });

  const sync = ({ filter: f, sorting, page }: SectionRouteParams) => {
    const parsed = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }) as Record<string, any>;

    if (f !== undefined) {
      if (f == null || (typeof f === "object" && Object.keys(f).length === 0)) {
        delete parsed.filter;
      } else {
        parsed.filter = f;
      }
    }

    if (sorting) parsed.sorting = sorting;
    if (page) parsed.page = String(page);

    const q = qs.stringify(parsed, { encode: true, arrayFormat: "repeat" });

    const fullPath = route.path + (q ? `?${q}` : "");
    router.replace(fullPath).catch(() => {
      // TODO
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
