<script setup lang="ts">
import type { PaginationFirstProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { PaginationFirst, useForwardProps } from "reka-ui";
import SvgIcon from "@ui/svg-icon";
import type { ButtonVariants } from "@ui/button";
import { cn } from "@shared/utils";
import { buttonVariants } from "@ui/button";

const props = withDefaults(
  defineProps<
    PaginationFirstProps & {
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
  <PaginationFirst
    data-slot="pagination-first"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'gap-1 px-2.5 sm:pr-2.5',
        props.class
      )
    "
    v-bind="forwarded"
  >
    <slot>
      <SvgIcon name="arrow" class="w-1.5 text-secondary" />
      <span class="sr-only">First</span>
    </slot>
  </PaginationFirst>
</template>
