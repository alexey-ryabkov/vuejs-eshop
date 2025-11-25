<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@shared/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="empty"
    :class="
      cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed text-center py-6 md:py-12',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
