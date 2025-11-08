<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cva } from "class-variance-authority";
import { useVModel } from "@vueuse/core";
import { cn } from "@shared/utils";
import { inputVariants, type InputVariants } from ".";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  variant?: InputVariants["variant"];
  size?: InputVariants["size"];
}>();

const emits =
  defineEmits<(e: "update:modelValue", payload: string | number) => void>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="
      cn(
        'placeholder:text-[#adadad] outline-none',
        'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        inputVariants({ variant, size }),
        props.class
      )
    "
  />
</template>
