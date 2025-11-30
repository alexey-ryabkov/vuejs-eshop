<script setup lang="ts">
import { cn } from "@shared/utils";
</script>

<template>
  <div
    :class="
      cn(
        'h-192 sm:h-158 max-md:pt-22 text-center sm:text-left text-white flex flex-col md:justify-center',
        'bg-[linear-gradient(90.7deg,#211C24_64%,#211C24_101%)] bg-no-repeat overflow-hidden'
      )
    "
  >
    <div class="layout-area flex flex-col sm:flex-row items-center gap-8">
      <div class="flex-1 flex flex-col gap-4 lg:gap-6">
        <slot />
      </div>
      <slot name="picture" />
    </div>
  </div>
</template>
