<script setup lang="ts">
import { isProductAvailiable } from "@utils";
import { useCachedProducts } from "@composables";
import { sortByArriving } from "@features/products-list/utils";
import NotFound from "@ui/not-found/NotFound.vue";
import { Preloader } from "@ui/preloader";
import { ProductsList } from "./products-list";

const { isLoading, isError, products } = useCachedProducts({
  name: "arrived",
  filter: isProductAvailiable,
  sorting: sortByArriving,
  count: 8,
});
</script>

<template>
  <div
    v-if="isLoading"
    class="flex items-center justify-center min-h-111 md:min-h-226 bg-accent rounded-2xl"
  >
    <Preloader :size="8">Load new arrivals...</Preloader>
  </div>
  <ProductsList v-else-if="!isError && products?.length" :products="products" />
  <NotFound v-else lined> No any new arrivals </NotFound>
</template>
