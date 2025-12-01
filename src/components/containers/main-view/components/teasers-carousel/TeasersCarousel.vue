<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import { watchOnce } from "@vueuse/core";

import type { BreakpointFlags } from "@types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@widgets/carousel";
import { useBreakpoints } from "@shared/useBreakpoints";
import { cn } from "@shared/utils";

const emblaMainApi = ref<CarouselApi>();
const emblaDotsApi = ref<CarouselApi>();

const slots = useSlots();
const items = computed(() => {
  const s = slots.default?.();
  return s
    ? s.filter(Boolean).map((vnode) => ({
        vnode,
        props: vnode.props ?? {},
      }))
    : [];
});
const itemsCount = computed(() => items.value.length);

const { breakpoints } = useBreakpoints();
const breakpointsToVisibleItemsCountMap = {
  sm: 2,
  md: 3,
  lg: 4,
};
const visibleItemsCount = computed(() => {
  return (
    Object.entries(breakpointsToVisibleItemsCountMap) as Array<
      [keyof BreakpointFlags, number]
    >
  ).reduce((count, [breakpoint, breakpointCnt]) => {
    if (breakpoints.value[breakpoint]) {
      return breakpointCnt;
    }
    return count;
  }, 1);
});
const dotsCount = computed(() => {
  if (!itemsCount.value) return 0;
  const visiblePart = itemsCount.value / visibleItemsCount.value;
  const count = Math.ceil(visiblePart);
  return count > 1 ? count : 0;
});

const selectedDotIndex = ref(0);
function onSelect() {
  if (!emblaMainApi.value || !emblaDotsApi.value) return;

  const selectedSlideIndex = emblaMainApi.value.selectedScrollSnap();
  const dotIndex = Math.ceil(selectedSlideIndex / visibleItemsCount.value);

  selectedDotIndex.value = dotIndex;
  emblaDotsApi.value.scrollTo(dotIndex);
}
function onDotClick(dotIndex: number) {
  if (!emblaMainApi.value || !emblaDotsApi.value) return;

  const maxSlideIndex = Math.max(0, itemsCount.value - 1);
  const targetSnapIndex = Math.min(
    dotIndex * visibleItemsCount.value,
    maxSlideIndex
  );

  emblaMainApi.value.scrollTo(targetSnapIndex);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>

<template>
  <div v-if="itemsCount > 0" class="w-full overflow-hidden relative">
    <Carousel @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent
        :class="
          cn({ '*:data-[slot=carousel-item]:pb-28': dotsCount > 0 }, 'm-0')
        "
      >
        <slot />
      </CarouselContent>
    </Carousel>
    <Carousel
      v-if="dotsCount > 0"
      :opts="{
        align: 'start',
      }"
      orientation="horizontal"
      class="absolute inline-flex bg-[#F9F9F9] p-3 rounded-2xl bottom-10 left-[50%] -translate-x-[50%]"
      @init-api="(val) => (emblaDotsApi = val)"
    >
      <CarouselContent class="m-0 gap-2">
        <CarouselItem
          v-for="dotNum in dotsCount"
          :key="dotNum"
          class="p-0 rounded-sm size-2 basis-auto cursor-pointer"
          :class="selectedDotIndex === dotNum - 1 ? 'bg-primary' : 'bg-border'"
          @click="onDotClick(dotNum - 1)"
        />
      </CarouselContent>
    </Carousel>
  </div>
</template>
