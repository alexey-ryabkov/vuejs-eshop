import { computed } from "vue";
import { useRoute } from "vue-router";

import useSectionRouteParams from "./useSectionRouteParams";

export default function useCategoryRoute() {
  const route = useRoute();
  const { filter, sorting, page } = useSectionRouteParams();

  const id = computed(() => Number(route.params.id));

  return { id, filter, sorting, page };
}
