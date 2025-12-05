<script setup lang="ts">
import { computed } from "vue";
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

function updateFilterValue(code: string, v: any) {
  const curr = filterItems.value;
  if (!curr || !(code in curr)) return;

  const item = curr[code];
  const old = item.filter?.value;

  if (JSON.stringify(old) === JSON.stringify(v)) return;

  const newFilter = item.filter.withValue
    ? item.filter.withValue(v)
    : { ...item.filter, value: v };

  filterItems.value = {
    ...curr,
    [code]: {
      ...item,
      filter: newFilter,
    },
  };
}
</script>

<template>
  <!-- HACK force redraw when got filterItems and openedItem becomes defined  -->
  <FiltersWrapper :key="openedItem" :opened="openedItem">
    <template
      v-for="({ name, code, filter }, index) in filterItems"
      :key="index"
    >
      <FilterItem :code="code">
        <template #title>{{ name }}</template>
        <RangeFilter
          v-if="filter instanceof RangeFilterType"
          :modelValue="filter.value as [number, number] | undefined"
          @update:modelValue="(v) => updateFilterValue(code, v)"
          :variants="filter.variants"
          :debounce-time="500"
        />
        <CheckboxListFilter
          v-else-if="filter instanceof CheckboxesFilterType"
          :combobox="filter.variants.length > SHOW_COMBOBOX_THRESHOLD"
          :modelValue="filter.value as string[] | undefined"
          @update:modelValue="(v) => updateFilterValue(code, v)"
          :variants="filter.variants"
        />
      </FilterItem>
    </template>
  </FiltersWrapper>
  <Button v-show="isMobile" class="w-full">Apply</Button>
</template>
