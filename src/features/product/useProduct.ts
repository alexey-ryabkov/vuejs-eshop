import { computed, unref } from "vue";
import { useRoute } from "vue-router";

import { useProductActions, useProducts, useProductStatus } from "@composables";
import { processCharacteristic } from "./utils";

export default function useProduct() {
  const route = useRoute();

  const productId = computed(() => Number(route.params.id));
  const id = unref(productId);

  const { isLoading, isError, result: data } = useProducts({ productId: id });

  const characteristics = computed(() =>
    data.value?.characteristics.map(processCharacteristic)
  );

  const { isFavorite, isInCart } = useProductStatus(id);
  const { toggleFav, toggleInCart } = useProductActions(id);

  return {
    id,
    isLoading,
    isError,
    data,
    characteristics,
    isFavorite,
    isInCart,
    toggleFav,
    toggleInCart,
  };
}
