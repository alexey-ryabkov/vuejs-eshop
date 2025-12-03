<script setup lang="ts">
import { FavsList } from "@features/favorites";
import BaseLayout from "@layouts/base";
</script>

<template>
  <BaseLayout>
    <div class="layout-area py-10 sm:py-28">
      <div class="w-83 sm:w-87 m-auto">
        <h1 class="text-2xl font-compact">Favorite</h1>
        <FavsList />
      </div></div
  ></BaseLayout>
</template>
