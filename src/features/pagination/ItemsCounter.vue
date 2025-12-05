<script setup lang="ts">
import { Preloader } from "@ui/preloader";
import useItems from "./useItems";

const { isLoading, isError, itemsCount } = useItems();
</script>

<template>
  <Preloader v-if="isLoading" :size="6" />
  <div v-else-if="!isError" class="text-base text-nowrap">
    <span class="text-secondary"><slot /></span>
    <span class="text-xl">{{ itemsCount }}</span>
  </div>
</template>
