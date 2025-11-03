<script setup lang="ts">
import type { TabsTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { TabsTrigger, useForwardProps } from "reka-ui";
import { cn } from "@shared/utils";

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'text-secondary data-[state=active]:text-primary focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:text-muted-foreground data-[state=active]:border-primary inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap border-b-2 border-transparent px-px transition-[color] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        props.class
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
