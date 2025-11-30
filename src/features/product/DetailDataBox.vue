<script setup lang="ts">
import useProduct from "@features/product/useProduct";

const { characteristics } = useProduct();
</script>

<template>
  <dl
    class="font-compact grid grid-cols-[3fr_1fr] gap-y-6 *:pb-1.5 *:border-b *:min-h-6 *:items-center *:text-base [&>dd]:text-right"
  >
    <template v-for="{ name, value } in characteristics">
      <dt>{{ name }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
</template>
