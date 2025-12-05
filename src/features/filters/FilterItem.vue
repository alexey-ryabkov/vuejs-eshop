<script setup lang="ts">
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@widgets/accordion";
import { ScrollArea } from "@ui/scroll-area";
import { computed, onMounted, ref } from "vue";

defineProps<{ code: string }>();

const contentRef = ref<HTMLElement>();
const scrollAreaRef = ref();
const contentHeight = ref(0);
const maxHeight = 144; // = h-36

const hasExcessContent = computed(() => {
  return contentHeight.value > maxHeight;
});

const measureContent = () => {
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight;
  }
};

onMounted(() => {
  measureContent();

  const observer = new ResizeObserver(() => {
    measureContent();
  });

  if (contentRef.value) {
    observer.observe(contentRef.value);
  }
});
</script>

<template>
  <AccordionItem :value="code" class="mb-9">
    <AccordionTrigger class="leading-tight h-auto pb-3"
      ><slot name="title"
    /></AccordionTrigger>
    <AccordionContent class="pb-0">
      <ScrollArea
        type="auto"
        :class="['w-full', { 'h-36': hasExcessContent }]"
        ref="scrollAreaRef"
      >
        <div ref="contentRef" class="p-1 pr-5">
          <slot />
        </div>
      </ScrollArea>
    </AccordionContent>
  </AccordionItem>
</template>
