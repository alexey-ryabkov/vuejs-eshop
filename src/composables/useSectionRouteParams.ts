import { ref, watch } from "vue";
import { useRoute, useRouter, type LocationQueryValue } from "vue-router";
import { useDebounceFn } from "@vueuse/core";

const DEBOUNCE_SYNC_MS = 250;
export default function useSectionRouteParams() {
  const route = useRoute();
  const router = useRouter();

  const page = ref<number>(Number(route.query.page ?? 1));
  const sorting = ref<LocationQueryValue>(
    (route.query.sorting ?? "") as LocationQueryValue
  );

  // TODO define filters refs from route query params

  const sync = () => {
    const query: Record<string, any> = {};
    // TODO sync filters
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
    (query) => {
      // TODO set filters
      page.value = Number(query.page ?? 1);
      sorting.value = (query.sorting ?? "") as LocationQueryValue;
    }
  );

  // TODO return filters
  return {
    page,
    sorting,
  };
}
