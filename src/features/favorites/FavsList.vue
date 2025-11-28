<script lang="ts" setup>
import { computed } from "vue";

import NotFound from "@components/ui/not-found/NotFound.vue";
import { Preloader } from "@components/ui/preloader";
import { Separator } from "@components/ui/separator";
import useFavorites from "./useFavorites";

const { isLoading, isError, favorites } = useFavorites();
const hasFavorites = computed(
  () => !isError.value && !!favorites.value?.length
);
</script>

<template>
  <Preloader v-if="isLoading" :size="7" class="py-12 px-0"
    >Load favorites...</Preloader
  >
  <ul v-else-if="hasFavorites">
    <li v-for="{ id, full_title, image, sku, link } in favorites" :key="id">
      <Separator />
      <div class="flex items-center py-4">
        <div
          class="w-26.5 pr-4 row-span-2 @md:row-span-1 flex justify-center items-center"
        >
          <RouterLink :to="link">
            <img
              :src="image"
              class="object-contain size-22.5"
              :alt="`${full_title} photo`"
              sizes="5.625rem"
          /></RouterLink>
        </div>

        <div>
          <h3 class="text-base font-thin md:font-bold mb-2">
            <RouterLink :to="link">{{ full_title }}</RouterLink>
          </h3>
          <span class="font-compact">{{ sku }}</span>
        </div>
      </div>
    </li>
  </ul>
  <NotFound muted lined v-else> Favorites list is empty </NotFound>
</template>
