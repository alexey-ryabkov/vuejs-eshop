<script setup lang="ts">
import type { PaginationPrevProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "@ui/button";
import { reactiveOmit } from "@vueuse/core";
import { PaginationPrev, useForwardProps } from "reka-ui";
import SvgIcon from "@ui/svg-icon";
import { cn } from "@shared/utils";
import { buttonVariants } from "@ui/button";

const props = withDefaults(
  defineProps<
    PaginationPrevProps & {
      size?: ButtonVariants["size"];
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    size: "default",
  }
);

const delegatedProps = reactiveOmit(props, "class", "size");
const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <PaginationPrev
    data-slot="pagination-previous"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'size-8 rounded-2xl',
        props.class
      )
    "
    v-bind="forwarded"
  >
    <slot>
      <SvgIcon name="arrow" class="w-1.5 text-primary" />
      <span class="sr-only">Previous</span>
    </slot>
  </PaginationPrev>
</template>
