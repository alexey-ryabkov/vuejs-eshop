<script setup lang="ts">
import type { PaginationEllipsisProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import SvgIcon from "@components/ui/svg-icon";
import { PaginationEllipsis } from "reka-ui";
import { cn } from "@shared/utils";

const props = defineProps<
  PaginationEllipsisProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="delegatedProps"
    :class="cn('flex size-8 items-end justify-center', props.class)"
  >
    <slot>
      <SvgIcon name="more" class="w-6 h-1 text-secondary" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>
