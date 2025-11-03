<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import SvgIcon from "@components/lib/SvgIcon.vue";
import { AccordionHeader, AccordionTrigger } from "reka-ui";
import { cn } from "@shared/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-3 text-left text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-0',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <!-- <ChevronDown
          
        /> -->
        <SvgIcon
          name="arrow-accordion"
          class="text-foreground pointer-events-none size-3 shrink-0 me-1.5 rotate-180 translate-y-0.5 transition-transform duration-200"
        ></SvgIcon>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
