<script setup lang="ts">
import { CartItemsList, OrderForm } from "@features/order";
</script>

<template>
  <div
    class="layout-area py-10 sm:py-28 flex flex-col md:flex-row gap-x-12 gap-y-10"
  >
    <div class="@container basis-1/2">
      <h1 class="text-2xl font-compact mb-10">Shopping cart</h1>
      <CartItemsList />
    </div>
    <div class="basis-1/2">
      <OrderForm>
        <template #caption> Order Summary </template>
      </OrderForm>
    </div>
  </div>
</template>
