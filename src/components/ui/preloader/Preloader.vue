<script setup lang="ts">
import { Spinner } from "@components/ui/spinner";
import { cn } from "@shared/utils";
import type { HTMLAttributes } from "vue";

const DEFAULT_SIZE = 4;
const SIZES_MAP = {
  3: "xs",
  4: "sm",
  5: "base",
  6: "lg",
  7: "xl",
  8: "2xl",
};

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: keyof typeof SIZES_MAP;
  }>(),
  { size: DEFAULT_SIZE }
);
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center font-compact',
        size > 6 ? 'gap-2 px-4' : 'gap-1 px-2',
        props.class
      )
    "
  >
    <Spinner :size="size" class="p-0.5" />
    <span :class="`text-${SIZES_MAP[size]}`">
      <slot />
    </span>
  </span>
</template>

<style>
@source inline("text-{xs,sm,base,lg,xl,2xl}");
@source inline("gap-2 px-4 gap-1 px-2");
</style>
