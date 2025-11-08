<script setup lang="ts">
import type { NumberFieldIncrementProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { NumberFieldIncrement, useForwardProps } from "reka-ui";
import SvgIcon from "@components/lib/SvgIcon.vue";
import { cn } from "@shared/utils";

const props = defineProps<
  NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="
      cn(
        'absolute top-1/2 -translate-y-1/2 p-3.5 right-0 disabled:cursor-not-allowed disabled:opacity-20',
        props.class
      )
    "
  >
    <slot>
      <SvgIcon name="plus" class="size-2" />
    </slot>
  </NumberFieldIncrement>
</template>
