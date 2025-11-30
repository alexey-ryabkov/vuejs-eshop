<script setup lang="ts">
import { BaseDataBox, ShopBox, ImagesCarousel } from "@features/product";
</script>

<template>
  <div class="layout-area flex flex-col py-10 lg:py-28 lg:flex-row gap-12">
    <div class="flex-1">
      <ImagesCarousel />
    </div>
    <div class="flex-1">
      <div>
        <BaseDataBox class="mb-8" />
        <ShopBox />
      </div>
    </div>
  </div>
</template>
