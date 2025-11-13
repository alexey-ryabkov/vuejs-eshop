<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@shared/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col px-4 md:px-8 lg:px-16 gap-10 rounded-xl border',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
