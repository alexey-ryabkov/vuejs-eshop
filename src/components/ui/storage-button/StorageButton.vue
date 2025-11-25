<script lang="ts" setup>
import { type HTMLAttributes } from "vue";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import SvgIcon from "@components/ui/svg-icon";
import { cn } from "@shared/utils";
import { storageButtonVariants, type StorageButtonVariants } from ".";

const props = defineProps<{
  title: string;
  link: string;
  icon: string;
  count: number;
  variant?: StorageButtonVariants["variant"];
  class?: HTMLAttributes["class"];
}>();

const { variant } = props;
const isIconBtn = variant == "icon";
</script>

<template>
  <div
    :class="
      cn(
        'leading-0',
        isIconBtn ? 'relative inline-block' : 'contents',
        props.class
      )
    "
  >
    <Button
      variant="ghost"
      :size="isIconBtn ? 'icon' : 'lg'"
      :class="storageButtonVariants({ variant })"
      @click.stop="$router.push(link)"
    >
      <SvgIcon :name="icon" class="size-8 p-1.5 text-primary" />
      <span v-if="!isIconBtn" class="text-base">{{
        title + (count ? ` (${count})` : "")
      }}</span>
    </Button>
    <Badge v-if="isIconBtn && count" class="absolute -top-1 -right-1.5">{{
      count
    }}</Badge>
  </div>
</template>
