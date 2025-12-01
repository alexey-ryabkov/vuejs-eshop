<script setup lang="ts">
import type { PaginationNextProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "@ui/button";
import { reactiveOmit } from "@vueuse/core";
import { PaginationNext, useForwardProps } from "reka-ui";
import { cn } from "@shared/utils";
import SvgIcon from "@ui/svg-icon";
import { buttonVariants } from "@ui/button";

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
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
  <PaginationNext
    data-slot="pagination-next"
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
      <span class="sr-only">Next</span>
      <SvgIcon name="arrow" class="w-1.5 text-primary rotate-180" />
    </slot>
  </PaginationNext>
</template>
