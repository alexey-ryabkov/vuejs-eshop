<script setup lang="ts">
import type { NumberFieldDecrementProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { NumberFieldDecrement, useForwardProps } from "reka-ui";
import SvgIcon from "@components/lib/SvgIcon.vue";
import { cn } from "@shared/utils";

const props = defineProps<
  NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="
      cn(
        'cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20',
        props.class
      )
    "
  >
    <slot>
      <SvgIcon name="minus" class="size-2" />
    </slot>
  </NumberFieldDecrement>
</template>
