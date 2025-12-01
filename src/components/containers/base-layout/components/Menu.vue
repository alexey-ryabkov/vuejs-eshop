<script setup lang="ts">
const props = defineProps<{
  items: {
    link?: string;
    name: string;
  }[];
}>();
</script>

<template>
  <nav class="leading-loose flex flex-col gap-2">
    <div v-for="{ name, link } in props.items">
      <RouterLink :to="link ?? ''">
        {{ name }}
      </RouterLink>
    </div>
  </nav>
</template>
