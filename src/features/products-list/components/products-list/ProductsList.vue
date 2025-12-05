<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ProductData } from "@types";
import { cn } from "@shared/utils";
import ProductCard from "../ProductCard.vue";
import { productListVariants, type ProductListVariants } from ".";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  products: ProductData[];
  variant?: ProductListVariants["variant"];
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ul
    v-if="products.length"
    :class="cn(productListVariants({ variant }), props.class)"
  >
    <ProductCard
      v-for="{
        id,
        full_title,
        link,
        image,
        final_price,
        is_available,
      } in products"
      as="li"
      :key="id"
      :id="id"
      :title="full_title"
      :image="image"
      :link="link"
      :price="final_price"
      :is-availiable="is_available"
    />
  </ul>
</template>
