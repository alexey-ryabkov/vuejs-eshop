<script setup lang="ts">
import { computed, inject } from "vue";

import type { ProductsCategorySorting } from "@types";
import { PRODUCTS_CATEGORY_SORTINGS } from "@app/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import useRouteSorting from "./useRouteSorting";

const defaultSorting = inject("default_sorting", "");
const sortingRaw = useRouteSorting();
const sorting = computed({
  get: () => sortingRaw.value || (defaultSorting ?? ""),
  set: (val: string) => (sortingRaw.value = val as ProductsCategorySorting),
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
