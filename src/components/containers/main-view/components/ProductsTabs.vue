<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import {
  ArrivedProducts,
  Bestsellers,
  FeaturedProducts,
} from "@features/products-list";
</script>

<template>
  <div class="layout-area py-14">
    <Tabs default-value="arrived">
      <TabsList class="m-auto sm:m-0">
        <TabsTrigger value="arrived"> New Arrival </TabsTrigger>
        <TabsTrigger value="bestseller"> Bestseller </TabsTrigger>
        <TabsTrigger value="featured"> Featured Products </TabsTrigger>
      </TabsList>
      <TabsContent value="arrived">
        <ArrivedProducts />
      </TabsContent>
      <TabsContent value="bestseller"> <Bestsellers /> </TabsContent>
      <TabsContent value="featured">
        <FeaturedProducts />
      </TabsContent>
    </Tabs>
  </div>
</template>
