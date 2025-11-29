<script setup lang="ts">
import { useDummyListProducts } from "@features/products-list/composables";
import NotFound from "@components/ui/not-found/NotFound.vue";
import { Preloader } from "@components/ui/preloader";
import { ProductsList } from "./products-list";

const { isLoading, isError, products } = useDummyListProducts("featured", 8);
</script>

<template>
  <div
    v-if="isLoading"
    class="flex items-center justify-center min-h-111 md:min-h-226 bg-accent rounded-2xl"
  >
    <Preloader :size="8">Load featured products...</Preloader>
  </div>
  <ProductsList v-else-if="!isError && products?.length" :products="products" />
  <NotFound v-else lined> No any featured products </NotFound>
</template>
