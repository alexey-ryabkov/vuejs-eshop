<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import {
  type ComboboxInputEmits,
  type ComboboxInputProps,
  ComboboxInput,
  useForwardPropsEmits,
} from "reka-ui";
import { CircleX } from "lucide-vue-next";

import { InputGroup, InputGroupAddon } from "@components/ui/input-group";
import type { InputVariants } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { cn } from "@shared/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ComboboxInputProps & {
    class?: HTMLAttributes["class"];
    size?: InputVariants["size"];
    loading?: boolean;
  }
>();

const emits = defineEmits<ComboboxInputEmits>();

const delegatedProps = reactiveOmit(props, ["class", "size"]);

const forwarded = useForwardPropsEmits(delegatedProps, emits);
const query = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v ?? ""),
});
</script>

<template>
  <div data-slot="command-input-wrapper">
    <InputGroup data-slot="command-input" variant="accent" :size="props.size">
      <ComboboxInput
        data-slot="input-group-control"
        :class="
          cn(
            'flex-1 rounded-none border-0 p-0 h-auto bg-transparent shadow-none focus-visible:ring-0',
            'dark:bg-transparent placeholder:text-[#adadad] outline-hidden',
            props.class
          )
        "
        v-bind="{ ...forwarded, ...$attrs }"
      >
        <slot />
      </ComboboxInput>
      <InputGroupAddon align="inline-start" v-if="$slots.icon">
        <slot name="icon" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end" v-if="query?.length">
        <Button @click="query = ''" size="icon-sm" variant="ghost">
          <CircleX width="24" />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
