import { useCategoryRoute } from "@composables";

// semantic alias
export default function useRouteSorting() {
  const { sorting } = useCategoryRoute();
  return sorting;
}
