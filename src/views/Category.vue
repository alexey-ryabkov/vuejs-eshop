<script setup lang="ts">
import { ref } from "vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from "@components/ui/combobox";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetOverlay,
} from "@components/ui/sheet";
import { Checkbox } from "@components/ui/checkbox";
import { Button } from "@components/ui/button";
import SvgIcon from "@components/ui/svg-icon";
import productSrcset from "@assets/images/iphone-14.png?w=104;160;320;448&format=webp&as=srcset";
import productPicture from "@assets/images/iphone-14.png";
import Label from "@components/ui/label/Label.vue";
import { Slider } from "@components/ui/slider";
import { Field, FieldLabel } from "@components/ui/field";
import { Input } from "@components/ui/input";
import { cn } from "@shared/utils";
import { ScrollArea } from "@components/ui/scroll-area";

interface Brand {
  value: string;
  label: string;
  count: number;
}
const brands: Brand[] = [
  { value: "apple", label: "Apple", count: 110 },
  { value: "samsung", label: "Samsung", count: 125 },
  { value: "xiaomi", label: "Xiaomi", count: 68 },
  { value: "poco", label: "Poco", count: 44 },
  { value: "oppo", label: "OPPO", count: 36 },
];

const modelValue = ref([250, 1500]);
</script>

<template>
  <div class="layout-area pt-10 sm:pt-6 pb-14 flex gap-8">
    <aside class="hidden sm:block flex-0 basis-64">
      <Accordion class="mb-5" default-value="item-0" collapsible>
        <AccordionItem value="item-0">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent class="pb-2.5">
            <div class="flex justify-between items-end mb-4">
              <Field class="w-22">
                <FieldLabel for="from" class="text-secondary font-compact"
                  >From</FieldLabel
                >
                <Input
                  v-model.number="modelValue[0]"
                  class="rounded-sm h-10 px-2"
                  autoComplete="off"
                  placeholder="from"
                  id="from"
                />
              </Field>
              <span class="text-[#E7E7E7] text-2xl leading-10">&mdash;</span>
              <Field class="w-22">
                <FieldLabel
                  for="to"
                  class="text-secondary font-compact justify-end"
                  >To</FieldLabel
                >
                <Input
                  v-model.number="modelValue[1]"
                  class="rounded-sm h-10 px-2 text-right"
                  autoComplete="off"
                  placeholder="to"
                  id="to"
                />
              </Field>
            </div>
            <Slider
              v-model="modelValue"
              :max="2000"
              :step="1"
              :class="cn('w-full', $attrs.class ?? '')"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <ScrollArea type="always" class="h-80 w-full pr-1">
              <div class="p-1 pr-5">
                <Combobox by="label" class="mb-4">
                  <ComboboxAnchor>
                    <ComboboxInput
                      :display-value="(val) => val?.label ?? ''"
                      placeholder="Search"
                      ><template #icon>
                        <SvgIcon
                          name="search"
                          class="size-6 p-1 text-[#989898]"
                        /> </template
                    ></ComboboxInput>
                  </ComboboxAnchor>
                  <ComboboxList align="start" class="w-[200px]">
                    <ComboboxEmpty> No brands found. </ComboboxEmpty>
                    <ComboboxGroup>
                      <ComboboxItem
                        v-for="brand in brands"
                        :key="brand.value"
                        :value="brand"
                      >
                        {{ brand.label }}
                        <ComboboxItemIndicator>
                          <SvgIcon name="checkmark" class="ml-auto size-2" />
                        </ComboboxItemIndicator>
                      </ComboboxItem>
                    </ComboboxGroup>
                  </ComboboxList>
                </Combobox>
                <ul
                  v-for="(_, index) in 3"
                  :key="index"
                  class="flex flex-col gap-2 mb-2 last:mb-0"
                >
                  <li
                    v-for="brand in brands"
                    :key="brand.value"
                    class="leading-loose flex gap-x-2 items-baseline"
                  >
                    <Checkbox :id="brand.value" class="self-center" />
                    <Label
                      :for="brand.value"
                      class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {{ brand.label }}
                    </Label>
                    <span class="text-secondary text-xs">{{
                      brand.count
                    }}</span>
                  </li>
                </ul>
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Battery capacity</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Screen type</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button class="w-full">Apply</Button>
    </aside>
    <div class="flex-1">
      <div
        class="flex flex-col-reverse sm:flex-row sm:items-center justify-between mb-6 gap-6"
      >
        <div class="text-base text-nowrap">
          <span class="text-secondary">Selected Products: </span>
          <span class="text-xl">85</span>
        </div>
        <div class="flex gap-4">
          <Sheet>
            <SheetTrigger class="basis-1/2 sm:hidden">
              <Button
                variant="outline"
                class="w-full border-input shadow-none text-[0.9375rem] flex justify-between"
              >
                Filters
                <SvgIcon name="filter" class="size-4.5" />
              </Button>
            </SheetTrigger>
            <SheetOverlay class="bg-transparent" />
            <SheetContent
              class="w-full sm:hidden gap-0 inset-0 top-20"
              side="left"
            >
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                modi, animi sint voluptatum cumque veniam quaerat perspiciatis
                ratione nulla sequi quod quasi aliquid laborum repellendus
                excepturi provident? Similique, eum modi.
              </div>
            </SheetContent>
          </Sheet>
          <Select>
            <SelectTrigger
              class="max-sm:basis-1/2 max-sm:h-12! sm:w-64 text-[0.9375rem]"
            >
              <SelectValue placeholder="Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="rating">By rating</SelectItem>
                <SelectItem value="name">By name</SelectItem>
                <SelectItem value="prise">By price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ul class="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-y-6 mb-10">
        <li
          class="bg-accent flex flex-col items-center gap-2 sm:gap-4 px-3 sm:px-4 pt-5 pb-6 text-center rounded-lg sm:rounded-2xl"
          v-for="(_, index) in 8"
          :key="index"
        >
          <Button
            variant="ghost"
            size="icon-lg"
            class="rounded-3xl self-end hover:[&>svg]:text-primary"
          >
            <SvgIcon
              name="heart_alt"
              class="size-7 fill-transparent text-[#909090C4]"
            />
            <!-- <SvgIcon
                name="heart_alt"
                class="size-7 fill-destructive-foreground text-destructive-foreground"
              /> -->
          </Button>
          <a class="" href="#">
            <img
              :srcset="productSrcset"
              :src="productPicture"
              class="object-contain size-26 sm:size-40"
              sizes="(max-width: 40rem) 6.5rem, 10rem"
              alt="Product"
          /></a>
          <h5 class="text-base">
            <a href="#" class="line-clamp-2 sm:line-clamp-none"
              >Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</a
            >
          </h5>
          <span class="text-price text-2xl font-compact pb-2 max-sm:pt-2"
            >1200</span
          >
          <Button class="w-full max-w-46.5 m-auto">Buy Now</Button>
        </li>
      </ul>
      <Pagination
        v-slot="{ page }"
        :items-per-page="10"
        :total="30"
        :default-page="2"
      >
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </PaginationItem>
          </template>
          <PaginationEllipsis :index="4" />
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </div>
  </div>
</template>
