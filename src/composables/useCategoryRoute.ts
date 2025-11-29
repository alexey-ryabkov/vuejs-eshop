import { computed } from "vue";
import { useRoute } from "vue-router";
import useSectionRouteParams from "./useSectionRouteParams";

export default function useCategoryRoute() {
  const route = useRoute();
  const { page, sorting } = useSectionRouteParams();

  const id = computed(() => Number(route.params.id));

  return { id, page, sorting };
}
