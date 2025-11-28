<script lang="ts" setup>
import { computed } from "vue";
import { APP_ROUTES } from "@app/constants";
import { useStore } from "@app/stores";
import StorageButton, {
  type StorageButtonProps,
} from "@components/ui/storage-button";

const props =
  defineProps<Omit<StorageButtonProps, "count" | "title" | "link" | "icon">>();

const store = useStore();
const count = computed(() => store.cartItemsCount);
</script>

<template>
  <StorageButton
    v-bind="props"
    :count="count"
    :link="APP_ROUTES.CART"
    title="Корзина"
    icon="basket"
  />
</template>
