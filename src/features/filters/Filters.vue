<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useFilterItems } from "@composables";
import {
  RangeFilter as RangeFilterType,
  CheckboxesFilter as CheckboxesFilterType,
} from "@entities/filter";
import { Button } from "@ui/button";
import { useBreakpoints } from "@shared/useBreakpoints";
import FiltersWrapper from "./FiltersWrapper.vue";
import FilterItem from "./FilterItem.vue";
import RangeFilter from "./RangeFilter.vue";
import CheckboxListFilter from "./CheckboxListFilter.vue";

const SHOW_COMBOBOX_THRESHOLD = 7;

const { isMobile } = useBreakpoints();
const filterItems = useFilterItems();
const openedItem = computed(() =>
  !isMobile.value && filterItems.value
    ? Object.values(filterItems.value)[0].code
    : undefined
);
// const { filter } = useCategory();
// watchEffect(() => console.log(openedItem.value));

// onMounted(() => {
//   filter.value = {
//     price: {
//       min: "1000",
//       max: "5000",
//     },
//     brand: ["apple", "samsung"],
//   };
// });

watchEffect(
  // watch(
  //   filter,
  () => {
    // console.log(
    //   "Filters changed:",
    //   filterItems.value
    //     ? filterItems.value
    //     : "no filter"
    // );

    if (filterItems.value) {
      Object.values(filterItems.value)
        .filter(({ filter }) => filter.isActive)
        .forEach(({ filter }) => {
          console.log(`filter ${filter.code}`, filter.value, filter.variants);
        });
    }
  }
  //   { immediate: true, deep: true }
);
</script>

<template>
  <!-- HACK force redraw when got filterItems and openedItem becomes defined -->
  <FiltersWrapper :key="openedItem" :opened="openedItem">
    <template
      v-for="({ name, code, filter, ref }, index) in filterItems"
      :key="index"
    >
      <FilterItem :code="code">
        <template #title>{{ name }}</template>
        <RangeFilter
          v-if="filter instanceof RangeFilterType"
          :value="filter.value"
          :variants="filter.variants"
        />
        <CheckboxListFilter
          v-else-if="filter instanceof CheckboxesFilterType"
          :combobox="filter.variants.length > SHOW_COMBOBOX_THRESHOLD"
          :value="ref"
          :variants="filter.variants"
        />
      </FilterItem>
    </template>
  </FiltersWrapper>
  <Button v-show="isMobile" class="w-full">Apply</Button>
</template>
