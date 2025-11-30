<script setup lang="ts">
import SvgIcon from "@components/ui/svg-icon";

import useProduct from "@features/product/useProduct";

const { data } = useProduct();
</script>

<template>
  <div
    v-if="data"
    class="bg-accent w-full sm:w-46 rounded-2xl p-8 grid grid-cols-2 sm:flex flex-col gap-4 text-center"
  >
    <div class="text-[3.5rem] leading-14">{{ data.rating }}</div>
    <div class="text-secondary row-start-2 text-base">of 125 reviews</div>
    <div class="flex row-span-2 place-self-center">
      <SvgIcon
        class="size-6 p-0.5 fill-transparent text-[#FFB547] cursor-pointer"
        v-for="num in 5"
        :key="num"
        name="star"
      />
    </div>
  </div>
</template>
