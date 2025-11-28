<script lang="ts" setup>
import { computed } from "vue";

import { useStore } from "@app/stores";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@components/ui/number-field";
import { Button } from "@components/ui/button";
import SvgIcon from "@components/ui/svg-icon";
import NotFound from "@components/ui/not-found/NotFound.vue";
import { Preloader } from "@components/ui/preloader";
import { Separator } from "@components/ui/separator";
import useCartItems from "./useCartItems";

const store = useStore();
const { isLoading, isError, items } = useCartItems();
const hasFavorites = computed(() => !isError.value && !!items.value?.length);
</script>

<template>
  <Preloader v-if="isLoading" :size="7" class="px-0"
    >Load cart items...</Preloader
  >
  <ul v-else-if="hasFavorites">
    <li
      v-for="{
        id,
        full_title,
        image,
        sku,
        link,
        quantity,
        final_price,
      } in items"
      class="last:*:data-[slot='separator-root']:hidden"
      :key="id"
    >
      <div
        class="grid grid-cols-[6.625rem_1fr] gap-y-4 @md:grid-cols-[6.625rem_1fr_1fr] py-4"
      >
        <div
          class="w-26.5 pr-4 row-span-2 @md:row-span-1 flex justify-center items-center"
        >
          <RouterLink :to="link">
            <img
              :src="image"
              class="object-contain size-22.5"
              :alt="`${full_title} photo`"
              sizes="5.625rem"
          /></RouterLink>
        </div>

        <div>
          <h3 class="text-base font-thin md:font-bold mb-2">
            <RouterLink :to="link">{{ full_title }}</RouterLink>
          </h3>
          <span class="font-compact">{{ sku }}</span>
        </div>

        <!-- id="quantity" -->
        <div class="flex items-center justify-between @md:gap-6">
          <NumberField
            @update:model-value="
              (quantity) => store.setInCartQuantity(id, quantity)
            "
            class="w-28.5"
            :default-value="quantity"
            :min="1"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          <span class="text-price text-xl">{{ final_price }}</span>
          <Button
            @click="store.removeFromCart(id)"
            variant="ghost"
            size="icon"
            class="rounded-2xl"
          >
            <SvgIcon name="cross" class="size-6 p-1 text-primary" />
          </Button>
        </div>
      </div>
      <Separator />
    </li>
  </ul>
  <NotFound class="py-0!" muted lined v-else> Cart is empty </NotFound>
</template>
