<script setup lang="ts">
import { useProductActions, useProductStatus } from "@composables";
import ProductPreview, {
  type ProductPreviewProps,
} from "@components/lib/product-preview";

const product = defineProps<
  Omit<ProductPreviewProps, "isFavorite"> & { id: number }
>();

const { id } = product;
const { toggleFav, buy } = useProductActions(id);
const { isFavorite } = useProductStatus(id);
</script>

<template>
  <ProductPreview
    v-bind="product"
    :is-favorite="isFavorite"
    @toggle-fav="toggleFav"
    @buy="buy"
  />
</template>
