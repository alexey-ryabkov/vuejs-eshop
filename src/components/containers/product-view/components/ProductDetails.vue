<script setup lang="ts">
import { DetailDataBox } from "@features/product";
</script>

<template>
  <div class="bg-accent py-10 sm:py-20">
    <div class="layout-area">
      <div class="bg-card rounded-lg px-6 sm:px-10 py-12 flex flex-col gap-8">
        <h3 class="text-2xl">Details</h3>
        <p class="text-secondary">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
        <DetailDataBox />
      </div>
    </div>
  </div>
</template>
