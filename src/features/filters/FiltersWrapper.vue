<script setup lang="ts">
import { Accordion } from "@widgets/accordion";

defineProps<{ opened?: string }>();
</script>

<template>
  <Accordion class="mb-5" :default-value="opened" collapsible>
    <slot />
  </Accordion>
</template>
