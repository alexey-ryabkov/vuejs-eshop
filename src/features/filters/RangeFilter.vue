<script setup lang="ts">
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

import { Slider } from "@ui/slider";
import { Field, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { cn, toNumber } from "@shared/utils";

const props = defineProps<{
  value?: [number, number];
  variants: [number, number];
  debounceTime?: number;
}>();

const model = defineModel<[number, number] | undefined>();
const displayValue = ref<[number, number]>(model.value ?? props.variants);

let isInternalChange = false;
const debouncedUpdateModelValue = useDebounceFn((value: [number, number]) => {
  const isChanged =
    value[0] !== props.variants[0] || value[1] !== props.variants[1];

  if (isChanged) {
    model.value = value;
  } else {
    model.value = undefined;
  }

  isInternalChange = false;
}, props.debounceTime ?? 1_000);

watch(model, (newValue) => {
  if (isInternalChange) return;

  if (newValue) {
    displayValue.value = newValue;
  } else {
    displayValue.value = props.variants;
  }
});

watch(
  displayValue,
  (newValue) => {
    isInternalChange = true;
    debouncedUpdateModelValue(newValue);
  },
  { deep: true }
);

const handleFromInput = (valueRaw: number | string) => {
  const value = toNumber(valueRaw);
  if (value) {
    displayValue.value = [value, displayValue.value[1]];
  }
};

const handleToInput = (valueRaw: number | string) => {
  const value = toNumber(valueRaw);
  if (value) {
    displayValue.value = [displayValue.value[0], value];
  }
};

// watch(model, (newValue) => {
//   if (newValue) {
//     displayValue.value = newValue;
//   } else {
//     displayValue.value = props.variants;
//   }
// });

// watch(
//   displayValue,
//   (newValue) => {
//     const isChanged =
//       newValue[0] !== props.variants[0] || newValue[1] !== props.variants[1];

//     if (isChanged) {
//       model.value = newValue;
//     } else {
//       model.value = undefined;
//     }
//   },
//   { deep: true }
// );
</script>

<template>
  <div class="flex justify-between items-end mb-4">
    <Field class="w-22">
      <FieldLabel for="from" class="text-secondary font-compact"
        >From</FieldLabel
      >
      <Input
        :model-value="displayValue[0]"
        @update:model-value="handleFromInput"
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
        :model-value="displayValue[1]"
        @update:model-value="handleToInput"
        class="rounded-sm h-10 px-2 text-right"
        autoComplete="off"
        placeholder="to"
        id="to"
      />
    </Field>
  </div>
  <Slider
    v-model="displayValue"
    :min="variants[0]"
    :max="variants[1]"
    :step="1"
    :class="cn('w-full', $attrs.class ?? '')"
  />
</template>
