import { ref, watch, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDebounceFn } from "@vueuse/core";

const DEBOUNCE_SYNC_MS = 250;
export default function useSectionRouteParams() {
  const route = useRoute();
  const router = useRouter();

  const page = ref<number>(Number(route.query.page ?? 1));
  const sorting = ref<string>((route.query.sorting as string) ?? "");
  // TODO проверка корректности сортировки? по enum

  // TODO define filters refs from route query params

  const sync = () => {
    const query: Record<string, any> = {};
    // TODO sync filters n sorting
    if (page.value && page.value !== 1) query.page = String(page.value);
    if (sorting.value) query.sorting = sorting.value;
    router.replace({ query });
  };
  const syncDebounced = useDebounceFn(sync, DEBOUNCE_SYNC_MS);
  // TODO watch filters
  watch([page, sorting], () => {
    syncDebounced();
  });

  watch(
    () => route.query,
    (newQuery) => {
      // TODO set filters
      page.value = Number(newQuery.page ?? 1);
      sorting.value = newQuery.sorting ?? "";
    }
  );

  // TODO return filters
  return {
    page,
    sorting,
  };
}
