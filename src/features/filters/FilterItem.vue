<script setup lang="ts">
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@widgets/accordion";
import { ScrollArea } from "@ui/scroll-area";

defineProps<{ code: string }>();
</script>

<template>
  <AccordionItem :value="code" class="mb-9">
    <AccordionTrigger class="leading-tight h-auto pb-3"
      ><slot name="title"
    /></AccordionTrigger>
    <AccordionContent class="pb-0">
      <ScrollArea type="auto" class="h-60 w-full pr-1">
        <div class="p-1 pr-5">
          <slot />
        </div>
      </ScrollArea>
    </AccordionContent>
  </AccordionItem>
</template>
