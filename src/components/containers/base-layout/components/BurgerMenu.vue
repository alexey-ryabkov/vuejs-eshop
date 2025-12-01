<script setup lang="ts">
import { SearchAutocomplete } from "@features/search";
import { CartBox } from "@features/order";
import { FavsBox } from "@features/favorites";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetOverlay,
  SheetClose,
} from "@ui/sheet";
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
import { ref } from "vue";

const opened = ref(false);
</script>

<template>
  <Sheet v-model:open="opened">
    <SheetTrigger class="sm:hidden" as-child>
      <Button variant="ghost" size="icon-lg" class="rounded-3xl">
        <SvgIcon name="burger" class="size-10 p-2 text-primary" />
      </Button>
    </SheetTrigger>
    <SheetOverlay class="sm:hidden" />
    <SheetContent class="w-full px-4 py-18 flex flex-col gap-4 sm:hidden">
      <SearchAutocomplete @found-selected="opened = false" full-width />
      <FavsBox />
      <CartBox />

      <SheetClose as-child>
        <Button
          variant="ghost"
          size="icon-lg"
          class="rounded-3xl absolute top-4 right-4"
        >
          <SvgIcon name="cross" class="size-10 p-2.5 text-primary" />
        </Button>
        <span class="sr-only">Close</span>
      </SheetClose>
    </SheetContent>
  </Sheet>
</template>
