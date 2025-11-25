<script setup lang="ts">
import { APP_ROUTES } from "@app/constants";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@components/ui/empty";
import { Button } from "@components/ui/button";
</script>

<template>
  <Empty v-if="true" class="h-full">
    <EmptyHeader>
      <EmptyMedia variant="default">
        <h1 class="text-7xl">404</h1>
      </EmptyMedia>
      <EmptyTitle>Page Not Found</EmptyTitle>
      <EmptyDescription>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div class="flex gap-2">
        <Button @click.stop="$router.push(APP_ROUTES.MAIN)" variant="outline">
          Go to the Homepage
        </Button>
      </div>
    </EmptyContent>
  </Empty>
</template>
