<script setup lang="ts">
import { Button } from "@ui/button";
import SvgIcon from "@ui/svg-icon";
import { cn } from "@shared/utils";
import type { ProductPreviewProps } from ".";

defineProps<
  ProductPreviewProps & {
    as?: keyof HTMLElementTagNameMap;
  }
>();

defineEmits<{
  "toggle-fav": [];
  buy: [];
}>();
</script>

<template>
  <component
    :is="as ?? 'div'"
    :class="
      cn(
        'flex flex-col items-center gap-2 sm:gap-4 px-3 sm:px-4 pt-5 pb-6 ',
        'bg-accent text-center rounded-lg sm:rounded-2xl'
      )
    "
  >
    <Button
      @click="$emit('toggle-fav')"
      :class="
        cn(
          'rounded-3xl self-end hover:[&>svg.fill-transparent]:text-primary',
          'hover:[&>svg.text-destructive-foreground]:fill-transparent'
        )
      "
      variant="ghost"
      size="icon-lg"
    >
      <SvgIcon
        name="heart_alt"
        :class="
          cn(
            isFavorite
              ? 'fill-destructive-foreground text-destructive-foreground'
              : 'fill-transparent text-[#909090C4]',
            'size-7'
          )
        "
      />
    </Button>
    <RouterLink :to="link">
      <img
        :src="image"
        class="object-contain size-26 sm:size-40 mix-blend-multiply"
        sizes="(max-width: 40rem) 6.5rem, 10rem"
        :alt="`${title} photo`"
      />
    </RouterLink>

    <h5 class="text-base">
      <RouterLink :to="link" class="line-clamp-2 sm:line-clamp-none">
        {{ title }}
      </RouterLink>
    </h5>
    <span class="text-price text-2xl font-compact pb-2 max-sm:pt-2">{{
      price
    }}</span>
    <Button @click="$emit('buy')" class="w-full max-w-46.5 m-auto"
      >Buy Now</Button
    >
  </component>
</template>
