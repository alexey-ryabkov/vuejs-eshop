<script setup lang="ts">
import { useDummyListProducts } from "@features/products-list/composables";
import { Preloader } from "@components/ui/preloader";
import { ProductsList } from "./products-list";

const props = withDefaults(
  defineProps<{
    relatedTo: number;
    count?: number;
  }>(),
  { count: 4 }
);

const { isLoading, isError, products } = useDummyListProducts(
  `related-to-${props.relatedTo}`,
  props.count
);
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center py-10 sm:py-20">
    <Preloader :size="8">Load related products...</Preloader>
  </div>
  <div
    v-else-if="!isError && products?.length"
    class="layout-area py-10 sm:py-20"
  >
    <h3 class="mb-8 text-2xl">Related Products</h3>
    <ProductsList :products="products" />
  </div>
</template>
