<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { APP_ROUTES } from "@app/constants";
import { RatingBox } from "@features/product";
import { RelatedProducts } from "@features/products-list";
import ProductCard from "./components/ProductCard.vue";
import ProductDetails from "./components/ProductDetails.vue";

const route = useRoute();
const productId = computed(() => Number(route.params.id));
</script>

<template>
  <!-- HACK for nav on this view  -->
  <div
    :key="
      $route.fullPath.includes(APP_ROUTES.PRODUCTS)
        ? $route.fullPath
        : undefined
    "
  >
    <ProductCard />
    <ProductDetails />
    <div class="layout-area pt-10 sm:py-22">
      <h3 class="mb-8 text-2xl sm:hidden">Reviews</h3>
      <RatingBox />
    </div>
    <RelatedProducts :related-to="productId" />
  </div>
</template>
