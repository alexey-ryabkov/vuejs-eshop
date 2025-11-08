<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@shared/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('relative px-9', props.class)">
    <slot />
  </div>
</template>
