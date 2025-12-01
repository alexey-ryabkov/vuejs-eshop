<script setup lang="ts">
import { cn } from "@shared/utils";
</script>

<template>
  <div
    class="flex flex-col md:grid grid-cols-2 xl:grid-cols-4 grid-rows-[20.5rem_17rem] 2xl:grid-rows-[25rem_17rem] text-center sm:text-left"
  >
    <div
      :class="
        cn(
          'bg-background text-foreground flex flex-col sm:flex-row items-center py-10 gap-6 sm:pb-0 md:pt-0 min-h-68',
          'sm:gap-10 lg:gap-16 xl:col-span-2 px-4 sm:pl-0 sm:pr-6 md:pr-14 max-md:order-3 overflow-hidden'
        )
      "
    >
      <slot name="long-tile-picture" />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <slot name="long-tile-text" />
      </div>
    </div>
    <div
      :class="
        cn(
          'flex flex-col items-center sm:flex-row xl:flex-row-reverse min-h-68',
          'xl:col-span-2 xl:row-span-2 bg-[#EDEDED] py-10 px-4 sm:pl-0 sm:pr-6 md:pr-14 xl:pr-0 xl:pl-14',
          'gap-6 sm:gap-10 lg:gap-14 max-md:order-4 overflow-hidden'
        )
      "
    >
      <slot name="big-tile-picture" />
      <div class="flex flex-col justify-center gap-4">
        <slot name="big-tile-text" />
      </div>
    </div>
    <div
      :class="
        cn(
          'bg-[#EDEDED] py-10 px-4 sm:pl-0 sm:pr-6 max-md:order-1 min-h-68 overflow-hidden',
          'flex flex-col items-center sm:flex-row gap-6 sm:gap-10 lg:gap-12 2xl:gap-10'
        )
      "
    >
      <slot name="left-tile-picture" />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <slot name="left-tile-text" />
      </div>
    </div>
    <div
      :class="
        cn(
          'text-white bg-[#353535] py-10 px-4 sm:pl-0 sm:pr-6 max-md:order-2 min-h-68 overflow-hidden',
          'flex flex-col items-center sm:flex-row gap-6 sm:gap-10 lg:gap-14 xl:gap-6'
        )
      "
    >
      <slot name="right-tile-picture" />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <slot name="right-tile-text" />
      </div>
    </div>
  </div>
</template>
