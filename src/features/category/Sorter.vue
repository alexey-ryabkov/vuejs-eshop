<script setup lang="ts">
import { computed, inject } from "vue";

import type { ProductsCategorySorting } from "@app/types";
import { PRODUCTS_CATEGORY_SORTINGS } from "@app/constants";
import useCategory from "@features/category/useCategory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

const { sorting: sortingRaw } = useCategory();

const defaultSorting = inject("default_sorting", "");
const sorting = computed({
  get: () => sortingRaw.value || (defaultSorting ?? ""),
  set: (val: string) => {
    sortingRaw.value = val as ProductsCategorySorting;
  },
});
</script>

<template>
  <Select v-model="sorting">
    <SelectTrigger
      class="max-sm:basis-1/2 max-sm:h-12! sm:w-64 text-[0.9375rem]"
    >
      <SelectValue placeholder="Sorting" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectItem
          v-for="(name, code) in PRODUCTS_CATEGORY_SORTINGS"
          :key="code"
          :value="code"
          >{{ name }}</SelectItem
        >
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
