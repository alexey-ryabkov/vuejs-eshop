<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@shared/utils";
import { Input } from "@components/ui/input";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Input
    data-slot="input-group-control"
    :class="
      cn(
        'flex-1 rounded-none border-0 p-0 h-auto bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        props.class
      )
    "
  />
</template>
