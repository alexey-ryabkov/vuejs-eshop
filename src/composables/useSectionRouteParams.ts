import { ref, watch, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDebounceFn } from "@vueuse/core";

const DEBOUNCE_SYNC_MS = 250;
export default function useSectionRouteParams() {
  const route = useRoute();
  const router = useRouter();

  const page = ref<number>(Number(route.query.page ?? 1));
  // TODO define filters refs from route query params
  // TODO define soring ref from route query params

  const sync = () => {
    const query: Record<string, any> = {};
    // TODO sync filters n sorting
    if (page.value && page.value !== 1) query.page = String(page.value);
    router.replace({ query });
  };
  const syncDebounced = useDebounceFn(sync, DEBOUNCE_SYNC_MS);
  // TODO watch filters n sorting
  watch([page], () => {
    syncDebounced();
  });

  watch(
    () => route.query,
    (qNew) => {
      // TODO set filters n sorting
      page.value = Number(qNew.page ?? 1);
    }
  );

  // TODO return filters n sorting
  return {
    page,
  };
}
