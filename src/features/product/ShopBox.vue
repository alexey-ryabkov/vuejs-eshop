<script setup lang="ts">
import { Button } from "@components/ui/button";
import SvgIcon from "@components/ui/svg-icon";

import useProduct from "@features/product/useProduct";

const { isFavorite, isInCart, toggleFav, toggleInCart } = useProduct();
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col sm:flex-row gap-4">
      <Button @click="toggleFav" variant="outline" class="sm:flex-1 h-14">{{
        isFavorite ? "Remove from Wishlist" : "Add to Wishlist"
      }}</Button>
      <Button @click="toggleInCart" class="sm:flex-1 h-14">{{
        isInCart ? "Remove from Cart" : "Add to Cart"
      }}</Button>
    </div>
    <div class="flex justify-between gap-6 text-center sm:text-left">
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div class="bg-accent p-4 rounded-xl">
          <SvgIcon name="delivery" class="size-6 text-[#909090C4]" />
        </div>
        <div>
          <div class="text-secondary">Free Delivery</div>
          <div>1-2 day</div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div class="bg-accent p-4 rounded-xl">
          <SvgIcon name="stock" class="size-6 text-[#909090C4]" />
        </div>
        <div>
          <div class="text-secondary">In Stock</div>
          <div>Today</div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div class="bg-accent p-4 rounded-xl">
          <SvgIcon name="reward" class="size-6 text-[#909090C4]" />
        </div>
        <div>
          <div class="text-secondary">Guaranteed</div>
          <div>1 year</div>
        </div>
      </div>
    </div>
  </div>
</template>
