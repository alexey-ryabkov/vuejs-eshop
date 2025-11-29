<script setup lang="ts">
import { useCategoryProducts } from "@features/products-list/composables";
import NotFound from "@components/ui/not-found/NotFound.vue";
import { Preloader } from "@components/ui/preloader";
import { ProductsList } from "./products-list";

const { isLoading, isError, products } = useCategoryProducts(9);

// watchEffect(() =>
//   products.value?.forEach(({ full_title }) => console.log(`${full_title}, `))
// );
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
