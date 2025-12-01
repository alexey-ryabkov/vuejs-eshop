<script setup lang="ts">
import { inject } from "vue";

import { useCategoryProducts } from "@features/products-list/composables";
import NotFound from "@ui/not-found/NotFound.vue";
import { Preloader } from "@ui/preloader";
import { ProductsList } from "./products-list";

const itemsPerPage = inject("items_per_page", 10);
const { isLoading, isError, products } = useCategoryProducts(itemsPerPage);
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center py-10 sm:py-20">
    <Preloader :size="8">Load category products...</Preloader>
  </div>
  <ProductsList
    v-else-if="!isError && products?.length"
    :products="products"
    variant="category"
  />
  <NotFound v-else> No products found </NotFound>
</template>
