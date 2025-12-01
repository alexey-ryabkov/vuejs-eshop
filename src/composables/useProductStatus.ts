import { useStore } from "@app/store";
import { computed } from "vue";

export default function useProductStatus(id: number) {
  const store = useStore();

  const isInCart = computed(() => store.isInCart(id));
  const isFavorite = computed(() => store.isFavorite(id));

  return { isInCart, isFavorite };
}
