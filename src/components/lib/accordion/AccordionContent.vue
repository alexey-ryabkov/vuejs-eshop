<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionContent } from "reka-ui";
import { cn } from "@shared/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="delegatedProps"
    class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden data-[state=open]:overflow-visible"
  >
    <div :class="cn('pt-6', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
