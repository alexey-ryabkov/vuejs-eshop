<script setup lang="ts">
import { ref } from "vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@widgets/accordion";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from "@widgets/combobox";
import { Checkbox } from "@ui/checkbox";
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
import Label from "@ui/label/Label.vue";
import { Slider } from "@ui/slider";
import { Field, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { ScrollArea } from "@ui/scroll-area";
import { cn } from "@shared/utils";

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
            <FieldLabel for="to" class="text-secondary font-compact justify-end"
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
                <span class="text-secondary text-xs">{{ brand.count }}</span>
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
</template>
