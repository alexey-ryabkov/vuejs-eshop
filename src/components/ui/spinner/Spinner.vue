<script setup lang="ts">
import { computed } from "vue";
import { Loader2Icon } from "lucide-vue-next";
import { cn } from "@shared/utils";

const DEFAULT_SIZE = 4;
const props = defineProps({
  class: {
    type: [String, Object, Array],
    required: false,
  },
  size: {
    type: Number,
    default: DEFAULT_SIZE,
    validator: (v: number) => Number.isInteger(v) && v >= 1,
  },
});
const size = computed(() => {
  const v = props.size;
  if (!Number.isInteger(v)) return DEFAULT_SIZE;
  if (v < 1) return 1;
  return v;
});
</script>

<template>
  <Loader2Icon
    role="status"
    aria-label="Loading"
    :class="cn(`size-${size} animate-spin`, props.class)"
  />
</template>

<style>
@source inline("size-{1,16}");
</style>
