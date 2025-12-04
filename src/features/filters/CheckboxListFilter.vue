<script setup lang="ts">
import { computed, toRef, watch, type Ref } from "vue";
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
import { castArray } from "@utils";

const props = defineProps<{
  value?: Ref<string[] | string | undefined>;
  variants: Record<string, number>;
  combobox?: boolean;
}>();
// const showCombobox = watch(() => props.combobox, () => props.combobox);
// const values = toRef(castArray(props.value));
const values = computed(() => castArray(props.value?.value ?? []));

function onChange(name: string, flag: boolean) {
  // console.log("onChange args", args);
  /* values.value = flag
    ? Array.from(new Set([...values.value, name]))
    : values.value.filter((v) => v !== name); */
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
        :modelValue="values.includes(name)"
        @update:modelValue="(flag) => onChange(name, flag as boolean)"
        class="self-center"
      />
      <Label
        :for="name"
        class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {{ name }}
      </Label>
      <span class="text-secondary text-xs">{{ count }}</span>
    </li>
  </ul>
</template>
