<script setup lang="ts">
import { Filters } from "@features/filters";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetOverlay,
} from "@ui/sheet";
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
</script>

<template>
  <Sheet>
    <SheetTrigger class="basis-1/2 sm:hidden">
      <slot name="trigger" />
    </SheetTrigger>
    <SheetOverlay class="bg-transparent" />
    <SheetContent class="w-full sm:hidden gap-0 inset-0 top-20" side="left">
      <SheetHeader>
        <SheetTitle>
          <SheetClose class="" as-child>
            <Button variant="link" size="lg" class="text-2xl px-0">
              <SvgIcon name="arrow" class="size-6 p-1" />
              Filters
            </Button>
          </SheetClose>
        </SheetTitle>
      </SheetHeader>
      <div class="p-4 pt-0 overflow-y-scroll">
        <Filters />
      </div>
      <slot />
    </SheetContent>
  </Sheet>
</template>
