import { computed, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDebounceFn } from "@vueuse/core";
import type { ProductsCategorySorting } from "@types";

const DEBOUNCE_SYNC_MS = 250;

type SectionRouteParams = {
  page?: number;
  sorting?: ProductsCategorySorting;
};

export default function useSectionRouteParams() {
  const route = useRoute();
  const router = useRouter();

  const page = computed<number>({
    get: () => Number(route.query.page ?? 1),
    set: (page) => {
      // sync({ page });
      syncDebounced({ page })();
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

  const sync = ({ page, sorting }: SectionRouteParams) => {
    const query: Record<string, any> = {};
    if (page) query.page = String(page);
    if (sorting) query.sorting = sorting;
    router.replace({ query: { ...route.query, ...query } });
  };
  const syncDebounced = (query: SectionRouteParams) =>
    useDebounceFn(() => sync(query), DEBOUNCE_SYNC_MS);

  return {
    page,
    sorting,
  };
}
