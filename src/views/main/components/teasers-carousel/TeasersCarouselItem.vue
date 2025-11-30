<script setup lang="ts">
import { CarouselItem } from "@components/ui/carousel";
import { Button } from "@components/ui/button";
import { cn } from "@shared/utils";

const { color, backgroundColor, link } = defineProps<{
  title: string;
  color?: string;
  backgroundColor?: string;
  link?: string;
}>();
</script>

<template>
  <CarouselItem
    :style="{ backgroundColor }"
    :class="
      cn(
        'flex-[1_0_100%] sm:flex-[1_0_50%] md:flex-[1_0_33.333%] lg:flex-[1_0_25%]',
        'flex flex-col gap-4 py-14 px-8 text-center sm:text-left'
      )
    "
  >
    <div class="flex justify-center items-center w-full h-90">
      <RouterLink :to="link ?? ''">
        <slot name="picture" />
      </RouterLink>
    </div>
    <!-- <div :style="{ color }">
      <slot name="title" />
    </div> -->
    <h4 class="text-2xl" :style="{ color }">
      {{ title }}
    </h4>
    <slot />
    <Button
      @click="link ? $router.push(link) : undefined"
      variant="outline"
      size="lg"
      class="w-46.5 m-auto sm:m-0"
      :style="{
        color,
        borderColor: color,
      }"
      >Shop Now</Button
    ></CarouselItem
  >
</template>
