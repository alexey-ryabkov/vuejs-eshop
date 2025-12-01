<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import type { ButtonVariants } from "@ui/button";
import { cn } from "@shared/utils";
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
import { useCarousel } from "./useCarousel";

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    } & WithClassAsProps
  >(),
  {
    variant: "ghost",
    size: "icon",
  }
);

const { orientation, canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :disabled="!canScrollPrev"
    :class="
      cn(
        'absolute size-10 rounded-full cursor-pointer',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <SvgIcon name="arrow-slider" class="w-3.25 h-6 text-primary" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
