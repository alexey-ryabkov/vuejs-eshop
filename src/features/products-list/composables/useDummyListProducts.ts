import { isProductAvailiable } from "@app/utils";
import { shuffle } from "@features/products-list/utils";
import { useCachedProducts } from "@composables";

export default function useDummyListProducts(name: string, count: number) {
  return useCachedProducts({
    filter: isProductAvailiable,
    sorting: shuffle,
    name,
    count,
  });
}
