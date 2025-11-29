<script setup lang="ts">
import { isProductDiscounted } from "@app/utils";
import { useCachedProducts } from "@composables";
import { sortByDiscountPercent } from "@features/products-list/utils";
import { Preloader } from "@components/ui/preloader";
import { ProductsList } from "./products-list";

const { isLoading, isError, products } = useCachedProducts({
  name: "discounted",
  filter: isProductDiscounted,
  sorting: sortByDiscountPercent,
  count: 4,
});
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center py-10 sm:py-20">
    <Preloader :size="8">Load discounted products...</Preloader>
  </div>
  <div
    v-else-if="!isError && products?.length"
    class="layout-area py-10 sm:py-20"
  >
    <h3 class="mb-8 text-2xl">Discounts up to -50%</h3>
    <ProductsList :products="products" />
  </div>
</template>
