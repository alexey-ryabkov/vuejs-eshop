<script lang="ts" setup>
import { computed } from "vue";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@widgets/carousel";
import { Preloader } from "@ui/preloader";
import SvgIcon from "@ui/svg-icon/SvgIcon.vue";
import { NotFound } from "@ui/not-found";
import useCategories from "./useCategories";

const DUMMY_CAROUSEL_PAGES_COUNT = 3;

const { isLoading, isError, categories } = useCategories();
const hasCategories = computed(
  () => !isError.value && !!categories.value?.length
);
</script>

<template>
  <Carousel
    class="relative"
    :opts="{
      align: 'start',
    }"
  >
    <div
      class="flex justify-end items-center gap-3 mb-12 sm:mb-7 not-has-[+[data-slot='carousel-content']]:mb-0"
    >
      <slot name="caption" />
      <CarouselPrevious class="static translate-none hover:bg-[#EDEDED]" />
      <CarouselNext class="static translate-none hover:bg-[#EDEDED]" />
    </div>
    <div
      v-if="isLoading"
      class="flex items-center justify-center py-6 md:py-12"
    >
      <Preloader :size="6">Load categories...</Preloader>
    </div>
    <NotFound v-else-if="!hasCategories" subject="categories" />
    <CarouselContent v-show="!isLoading && hasCategories" class="m-0">
      <CarouselItem
        v-for="(_, index) in DUMMY_CAROUSEL_PAGES_COUNT"
        :key="index"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 p-0 place-items-center gap-4"
      >
        <RouterLink
          v-for="category of categories"
          class="bg-[#EDEDED] rounded-2xl w-40 h-32 flex flex-col items-center justify-center"
          :to="category.link"
          :key="category.id"
        >
          <span class="w-16 h-16 flex items-center justify-center">
            <SvgIcon
              :name="category.icon"
              class="max-w-16 max-h-16 p-1 text-primary"
            />
          </span>
          <h3 class="text-base font-semibold text-center">
            {{ category.name }}
          </h3>
        </RouterLink>
      </CarouselItem>
    </CarouselContent>
    <slot />
  </Carousel>
</template>
