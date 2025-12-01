import { useRouter } from "vue-router";

import { APP_ROUTES } from "@app/constants";
import { useStore } from "@app/store";

export default function useProductActions(id: number) {
  const router = useRouter();
  const store = useStore();

  const toggleFav = () => {
    store.toggleFavorite(id);
  };
  const toggleInCart = () => {
    if (!store.isInCart(id)) {
      store.addToCart(id);
    } else {
      store.removeFromCart(id);
    }
  };
  const buy = () => {
    if (!store.isInCart(id)) {
      store.addToCart(id);
    }
    router.push(APP_ROUTES.CART);
  };

  return { toggleFav, toggleInCart, buy };
}
