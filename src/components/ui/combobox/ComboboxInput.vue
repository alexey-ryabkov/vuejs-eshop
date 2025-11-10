<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ComboboxInput, useForwardPropsEmits } from "reka-ui";
import SvgIcon from "@components/lib/SvgIcon.vue";
import { cn } from "@shared/utils";
import { InputGroup, InputGroupAddon } from "@components/ui/input-group";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ComboboxInputProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ComboboxInputEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <div data-slot="command-input-wrapper">
    <InputGroup data-slot="command-input" variant="accent">
      <ComboboxInput
        data-slot="input-group-control"
        :class="
          cn(
            'flex-1 rounded-none border-0 p-0 h-auto bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent placeholder:text-[#adadad] outline-hidden',
            props.class
          )
        "
        v-bind="{ ...forwarded, ...$attrs }"
      >
        <slot />
      </ComboboxInput>
      <InputGroupAddon>
        <SvgIcon name="search" class="size-6 p-1 text-[#989898]" />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
