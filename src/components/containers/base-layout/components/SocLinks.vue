<script setup lang="ts">
import SvgIcon from "@ui/svg-icon";

const props = defineProps<{
  items: {
    link?: string;
    icon: string;
  }[];
}>();
</script>

<template>
  <ul class="flex gap-9">
    <li v-for="item in props.items">
      <a :href="item.link || '#'">
        <SvgIcon :name="item.icon" class="size-6 sm:size-4" />
      </a>
    </li>
  </ul>
</template>
