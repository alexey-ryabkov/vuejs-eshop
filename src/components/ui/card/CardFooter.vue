<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@shared/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="card-footer"
    :class="
      cn('flex items-center pb-14 md:pb-16 pt-2 [.border-t]:pt-6', props.class)
    "
  >
    <slot />
  </div>
</template>
