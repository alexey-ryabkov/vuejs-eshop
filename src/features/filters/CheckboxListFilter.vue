<script setup lang="ts">
import {
  computed,
  ref,
  toRef,
  toValue,
  watch,
  watchEffect,
  type Ref,
} from "vue";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from "@widgets/combobox";
import { Checkbox } from "@ui/checkbox";
import SvgIcon from "@ui/svg-icon";
import { Label } from "@ui/label";

defineProps<{
  variants: Record<string, number>;
  combobox?: boolean;
}>();

const model = defineModel<string[] | undefined>({ default: undefined });

function toggle(name: string, checked: boolean) {
  const current = model.value ?? [];

  model.value = checked
    ? Array.from(new Set([...current, name]))
    : current.filter((x) => x !== name);

  if (model.value?.length === 0) model.value = undefined;
}
</script>

<template>
  <Combobox v-if="false" by="label" class="mb-4">
    <ComboboxAnchor>
      <ComboboxInput
        :display-value="(val) => val?.label ?? ''"
        placeholder="Search"
        ><template #icon>
          <SvgIcon name="search" class="size-6 p-1 text-[#989898]" /> </template
      ></ComboboxInput>
    </ComboboxAnchor>
    <ComboboxList align="start" class="w-[200px]">
      <ComboboxEmpty> No items found. </ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxItem
          v-for="(_, name, index) in variants"
          :key="index"
          :value="name"
        >
          {{ name }}
          <ComboboxItemIndicator>
            <SvgIcon name="checkmark" class="ml-auto size-2" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
  <ul class="flex flex-col gap-2 mb-2 last:mb-0">
    <li
      v-for="(count, name, index) in variants"
      :key="index"
      class="leading-loose flex gap-x-2 items-baseline"
    >
      <Checkbox
        :id="name"
        :modelValue="model?.includes(name)"
        @update:modelValue="(checked) => toggle(name, checked as boolean)"
        class="self-center"
      />
      <Label
        :for="name"
        class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-tight"
      >
        {{ name }}
      </Label>
      <span class="text-secondary text-xs">{{ count }}</span>
    </li>
  </ul>
</template>
