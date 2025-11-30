<script setup lang="ts">
import { computed, ref } from "vue";
import { watchOnce } from "@vueuse/core";

import useProduct from "@features/product/useProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@components/ui/carousel";
import { useBreakpoints } from "@shared/useBreakpoints";

const { data } = useProduct();

const MIN_IMAGES_COUNT = 4;
const images = computed(() => {
  const images = data.value?.images ?? [];
  const imagesCount = images?.length;

  if (!imagesCount) return [];
  if (imagesCount >= MIN_IMAGES_COUNT) return images;

  return [
    ...images,
    ...Array.from(
      { length: MIN_IMAGES_COUNT - imagesCount },
      () => images[imagesCount - 1]
    ),
  ];
});

const { isMobile } = useBreakpoints();
const carouselThumbsOrientation = computed(() =>
  isMobile.value ? "horizontal" : "vertical"
);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>

<template>
  <div
    v-if="images.length"
    class="flex flex-col w-full gap-8 sm:flex-row-reverse sm:w-134 sm:gap-12 sm:h-133 sm:pt-4 m-auto"
  >
    <Carousel class="w-full sm:w-104" @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="m-0">
        <CarouselItem
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex items-center justify-center p-0"
        >
          <img :src="image" sizes="(max-width: 40rem) 16.5rem, 26rem" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <Carousel
      :opts="{
        align: 'start',
      }"
      :key="carouselThumbsOrientation"
      :orientation="carouselThumbsOrientation"
      class="relative sm:py-9"
      @init-api="(val) => (emblaThumbnailApi = val)"
    >
      <CarouselContent class="w-full sm:w-18.5 sm:gap-6 m-0">
        <CarouselItem
          v-for="(image, index) in images"
          :key="index"
          class="p-0 basis-1/4 cursor-pointer h-16 sm:h-auto flex items-center justify-center"
          :class="index === selectedIndex ? '' : 'opacity-50'"
          @click="onThumbClick(index)"
        >
          <img
            :src="image"
            sizes="4.625rem"
            class="max-w-18.5 h-full sm:h-auto"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
