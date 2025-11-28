import { computed } from "vue";
import { calcOrderPerformPrice, calcOrderTaxPrice } from "./utils";
import useCartItems from "./useCartItems";

export default function useOrder() {
  const { isLoading, isError, items } = useCartItems();

  const subTotal = computed(
    () =>
      items.value?.reduce(
        (sum, { final_price, quantity }) => sum + final_price * quantity,
        0
      ) ?? 0
  );
  const taxPrice = computed(() =>
    items.value ? calcOrderTaxPrice({ items: items.value }) : 0
  );
  const performPrice = computed(() =>
    items.value ? calcOrderPerformPrice({ items: items.value }) : 0
  );
  const total = computed(
    () => subTotal.value + taxPrice.value + performPrice.value
  );

  return { isLoading, isError, items, subTotal, taxPrice, performPrice, total };
}
