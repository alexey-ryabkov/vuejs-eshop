<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner";
import { Toaster as Sonner } from "vue-sonner";

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner
    class="toaster font-compact group"
    v-bind="props"
    :toastOptions="{
      ...props.toastOptions,
      classes: {
        ...props.toastOptions?.classes,
        title: 'text-sm! font-normal!',
        description: 'text-sm! text-muted-foreground!',
        icon: 'pt-1 self-start',
        success: '[&_svg]:text-green-600',
        error: '[&_svg]:text-red-600',
      },
    }"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',
    }"
  />
</template>
