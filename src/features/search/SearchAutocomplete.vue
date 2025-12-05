<script lang="ts" setup>
import { nextTick, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import {
  useForwardPropsEmits,
  type ComboboxRootEmits,
  type ComboboxRootProps,
} from "reka-ui";

import type { ProductData } from "@types";
import { useProducts } from "@composables";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@widgets/combobox";
import { Spinner } from "@ui/spinner";
import SvgIcon from "@ui/svg-icon";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ComboboxRootProps & {
    fullWidth?: boolean;
  }
>();
const emits = defineEmits<ComboboxRootEmits & { "found-selected": [] }>();
const forwarded = useForwardPropsEmits(props, emits);

const { isLoading, isError, result: products } = useProducts();

const query = ref("");
const opened = ref(false);
watchEffect(() => {
  if (!query.value) opened.value = false;
});

const router = useRouter();
async function onFoundSelected({ link }: ProductData) {
  await router.push(link);
  await nextTick();
  query.value = "";
  emits("found-selected");
}
</script>

<template>
  <Combobox
    v-bind="{ ...forwarded, ...{ by: 'name' } }"
    v-model:open="opened"
    :class="fullWidth ? 'w-full' : 'w-81.5 sm:w-93'"
  >
    <ComboboxAnchor>
      <ComboboxInput
        v-model="query"
        :display-value="(val) => val?.full_title ?? ''"
        :placeholder="isLoading ? 'Search initialization...' : 'Search'"
        :disabled="isLoading || isError"
        size="lg"
      >
        <template #icon>
          <SvgIcon
            v-show="!isLoading"
            name="search"
            class="size-6 p-1 text-[#989898]"
          />
          <Spinner v-show="isLoading" :size="6" class="p-0.5" />
        </template>
      </ComboboxInput>
    </ComboboxAnchor>

    <ComboboxList
      align="start"
      class="ml-9 w-72.5 sm:ml-0 sm:w-93 max-h-[80vh] overflow-y-scroll overflow-x-hidden"
    >
      <ComboboxEmpty> No products found. </ComboboxEmpty>

      <ComboboxGroup>
        <ComboboxItem
          v-for="product in products"
          :key="product.id"
          :value="product"
          @click="onFoundSelected(product)"
        >
          <div class="cursor-pointer">{{ product.full_title }}</div>
          <!-- <RouterLink :to="product.link" class="inline-block w-full">{{
            product.full_title
          }}</RouterLink> -->
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
