<script setup lang="ts">
import { provide } from "vue";

import { CategoryProductsList, ProductsCounter } from "@features/products-list";
import { Filters, Sorter, Paginator } from "@features/category";
import BaseLayout from "@layouts/base";
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
import FiltersPanel from "./FiltersPanel.vue";

provide("items_per_page", 9);
provide("default_sorting", "rating");
</script>

<template>
  <BaseLayout>
    <div class="layout-area pt-10 sm:pt-6 pb-14 flex gap-8">
      <aside class="hidden sm:block flex-0 basis-64">
        <Filters />
      </aside>
      <div class="flex-1">
        <div
          class="flex flex-col-reverse sm:flex-row sm:items-center justify-between mb-6 gap-6"
        >
          <ProductsCounter />

          <div class="flex gap-4">
            <FiltersPanel>
              <template #trigger>
                <Button
                  variant="outline"
                  class="w-full border-input shadow-none text-[0.9375rem] flex justify-between"
                >
                  Filters
                  <SvgIcon name="filter" class="size-4.5" />
                </Button>
              </template>
            </FiltersPanel>

            <Sorter />
          </div>
        </div>
        <CategoryProductsList />
        <Paginator />
      </div></div
  ></BaseLayout>
</template>
