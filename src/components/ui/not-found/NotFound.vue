<script setup lang="ts">
import { Ban } from "lucide-vue-next";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@components/ui/empty";
import { capitalizeFirst, cn } from "@shared/utils";
import { notFoundVariants } from ".";

defineProps<{
  subject?: string;
  lined?: boolean;
  muted?: boolean;
}>();
</script>

<template>
  <Empty :class="cn(notFoundVariants({ lined, muted }), '')">
    <EmptyHeader :class="cn(notFoundVariants({ lined, muted }), '')">
      <EmptyMedia
        variant="icon"
        :class="cn(notFoundVariants({ lined, muted }), '')"
      >
        <Ban />
      </EmptyMedia>
      <EmptyTitle>
        <template v-if="$slots.default">
          <slot />
        </template>
        <template v-else>
          {{ capitalizeFirst(subject) }} not found...
        </template>
      </EmptyTitle>
    </EmptyHeader>
  </Empty>
</template>
