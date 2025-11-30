<script setup lang="ts">
import { computed, inject } from "vue";

import useCategory from "@features/category/useCategory";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";

const { isLoading, isError, products, page: activePage } = useCategory();

const itemsCount = computed(() => products.value?.length ?? 0);
const itemsPerPage = inject("items_per_page", 10);

const gotoPage = (page: number) => (activePage.value = page);
</script>

<template>
  <Pagination
    v-if="!isLoading && !isError && itemsCount > itemsPerPage"
    v-slot="{ page }"
    :items-per-page="itemsPerPage"
    :total="itemsCount"
    :page="activePage"
    :sibling-count="1"
    :show-edges="true"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious @click="gotoPage(page - 1)" />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
          @click="gotoPage(item.value)"
        >
          {{ item.value }}
        </PaginationItem>
        <PaginationEllipsis
          v-else-if="item.type === 'ellipsis'"
          :index="index"
        />
      </template>
      <PaginationNext @click="gotoPage(page + 1)" />
    </PaginationContent>
  </Pagination>
</template>
