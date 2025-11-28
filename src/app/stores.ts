import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { CartItem } from "@app/types";

export const useStore = defineStore(
  "main",
  () => {
    const cart = ref<CartItem[]>([]);
    const favorites = ref<number[]>([]);

    const cartItemsCount = computed(() =>
      cart.value.reduce((sum, { quantity }) => sum + quantity, 0)
    );
    const findInCartKey = (id: number) =>
      cart.value.findIndex(({ id: itemId }) => itemId === id);

    function isInCart(id: number) {
      return findInCartKey(id) >= 0;
    }

    function addToCart(id: number, quantity = 1) {
      const key = findInCartKey(id);
      if (key >= 0) {
        cart.value[key].quantity += quantity;
      } else {
        cart.value.push({
          id,
          quantity,
        });
      }
    }

    function setInCartQuantity(id: number, quantity: number) {
      const key = findInCartKey(id);
      if (key >= 0) {
        if (quantity <= 0) cart.value.splice(key, 1);
        else cart.value[key].quantity = quantity;
      }
    }

    function removeFromCart(id: number) {
      const key = findInCartKey(id);
      if (key >= 0) {
        cart.value.splice(key, 1);
      }
    }

    function clearCart() {
      cart.value = [];
    }

    function isFavorite(id: number) {
      return favorites.value.includes(id);
    }

    function toggleFavorite(id: number) {
      const key = favorites.value.indexOf(id);
      if (key >= 0) favorites.value.splice(key, 1);
      else favorites.value.push(id);
    }

    function clearFavorites() {
      favorites.value = [];
    }

    return {
      cart,
      favorites,
      cartItemsCount,
      isInCart,
      addToCart,
      setInCartQuantity,
      removeFromCart,
      clearCart,
      isFavorite,
      toggleFavorite,
      clearFavorites,
    };
  },
  {
    persist: true,
  }
);
