<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ name: string }>();
const symbolId = computed(() => `#${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
