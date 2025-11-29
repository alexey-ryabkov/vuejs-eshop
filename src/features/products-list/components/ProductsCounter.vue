<script setup lang="ts">
import { Preloader } from "@components/ui/preloader";
import { useCategoryProducts } from "@features/products-list/composables";
import { computed } from "vue";

const { isLoading, isError, products } = useCategoryProducts();
const count = computed(() => products.value?.length ?? 0);
</script>

<template>
  <Preloader v-if="isLoading" :size="6" />
  <div v-else-if="!isError" class="text-base text-nowrap">
    <span class="text-secondary">Selected Products: </span>
    <span class="text-xl">{{ count }}</span>
  </div>
</template>
