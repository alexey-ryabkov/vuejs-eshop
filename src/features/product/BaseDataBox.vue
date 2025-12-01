<script setup lang="ts">
import { computed } from "vue";

import useProduct from "@features/product/useProduct";
import { Preloader } from "@ui/preloader";
import NotFound from "@ui/not-found/NotFound.vue";
import SvgIcon from "@ui/svg-icon";

const {
  isLoading,
  isError,
  data,
  characteristics: characteristicsRaw,
} = useProduct();

const MAX_CHARACTERISTICS_TILES = 6;
const characteristics = computed(() =>
  characteristicsRaw.value?.slice(0, MAX_CHARACTERISTICS_TILES)
);
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center py-10 sm:py-20">
    <Preloader :size="8">Load product data...</Preloader>
  </div>
  <div v-else-if="!isError && data">
    <h1 class="text-[2.5rem] mb-6 leading-10">{{ data.full_title }}</h1>
    <div class="flex gap-x-4 items-center mb-4">
      <span class="text-price text-[2rem]">{{ data.final_price }}</span>
      <span
        v-if="data.discount_price"
        class="text-price text-2xl line-through text-secondary font-compact font-thin"
        >{{ data.price }}</span
      >
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-6">
      <div
        v-for="{ name, value, icon } in characteristics"
        class="bg-accent pl-4 pr-1 min-h-21 py-1 rounded-lg flex gap-2 items-center leading-tight"
      >
        <SvgIcon :name="icon" class="size-5 text-[#4E4E4E]" />
        <div>
          <div class="text-secondary font-compact line-clamp-2">{{ name }}</div>
          <div class="line-clamp-2">{{ value }}</div>
        </div>
      </div>
    </div>

    <p class="font-compact text-secondary">
      Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work
      without rechargingthroughout the day. Incredible photosas in weak, yesand
      in bright lightusing the new systemwith two cameras
      <a href="#" class="link">more...</a>
    </p>
  </div>
  <NotFound v-else> No product found </NotFound>
</template>
