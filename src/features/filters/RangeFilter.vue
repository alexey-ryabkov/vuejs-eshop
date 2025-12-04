<script setup lang="ts">
import { ref } from "vue";

import { Slider } from "@ui/slider";
import { Field, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { cn } from "@shared/utils";

const props = defineProps<{
  value?: [number, number];
  variants: [number, number];
}>();

const modelValue = ref(props.value ?? props.variants);
</script>

<template>
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
    :min="variants[0]"
    :max="variants[1]"
    :step="1"
    :class="cn('w-full', $attrs.class ?? '')"
  />
</template>
