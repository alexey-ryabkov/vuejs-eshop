import type { Ref } from "vue";
import { useCategories as useCategoriesBase } from "@entities/category";
import { useProcessingWithMinDuration } from "@composables";
import { processCategory } from "./utils";

type Category = ReturnType<typeof processCategory>;

export function useCategories() {
  const { isError, data } = useCategoriesBase();

  const { isLoading, result } = useProcessingWithMinDuration<Category>(
    data,
    processCategory
  );

  const categories = result as Ref<Category[] | undefined>;
  return { isLoading, isError, categories };
}
