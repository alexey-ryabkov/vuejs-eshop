import { computed, ref } from "vue";
import { defineStore } from "pinia";

import type { CartItem, Product } from "@app/types";

export const useStore = defineStore(
  "main",
  () => {
    const cart = ref<CartItem[]>([]);
    const favorites = ref<number[]>([]);

    const totalCount = computed(() =>
      cart.value.reduce((s, it) => s + it.quantity, 0)
    );
    const findIndex = (id: number) => cart.value.findIndex((i) => i.id === id);

    function addToCart(item: Product, quantity = 1) {
      const idx = findIndex(item.id);
      if (idx >= 0) {
        cart.value[idx].quantity += quantity;
      } else {
        cart.value.push({
          ...item,
          quantity,
        });
      }
    }

    function setQuantity(id: number, quantity: number) {
      const idx = findIndex(id);
      if (idx >= 0) {
        if (quantity <= 0) cart.value.splice(idx, 1);
        else cart.value[idx].quantity = quantity;
      }
    }

    function removeFromCart(id: number) {
      const idx = findIndex(id);
      if (idx >= 0) {
        cart.value.splice(idx, 1);
      }
    }

    function clearCart() {
      cart.value = [];
    }

    function toggleFavorite(id: number) {
      const i = favorites.value.indexOf(id);
      if (i >= 0) favorites.value.splice(i, 1);
      else favorites.value.push(id);
    }

    function isFavorite(id: number) {
      return favorites.value.includes(id);
    }

    return {
      cart,
      favorites,
      totalCount,
      addToCart,
      setquantity: setQuantity,
      removeFromCart,
      clearCart,
      toggleFavorite,
      isFavorite,
    };
  },
  {
    persist: true,
  }
);
