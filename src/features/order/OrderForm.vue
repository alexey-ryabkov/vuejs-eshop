<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "@app/stores";
import { successNotification } from "@app/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@components/ui/input-group";
import { Button } from "@components/ui/button";
import useOrder from "./useOrder";

const order = useOrder();
const hasCartItems = computed(() => order.items.value.length > 0);

const store = useStore();
function dummyCheckout() {
  store.clearCart();
  successNotification("The order was successfully placed");
}
</script>

<template>
  <Card v-if="hasCartItems">
    <CardHeader v-if="$slots.caption">
      <CardTitle>
        <slot name="caption" />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Form class="flex flex-col gap-6 mb-6">
        <FormField name="code">
          <FormItem>
            <FormLabel for="input-code">Discount code / Promo code</FormLabel>
            <FormControl>
              <Input
                id="input-code"
                placeholder="Code"
                class="h-16 placeholder:font-compact"
                size="lg"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField name="card">
          <FormItem>
            <FormLabel for="input-card">Your bonus card number</FormLabel>
            <InputGroup class="h-16" size="lg">
              <FormControl>
                <InputGroupInput
                  id="input-card"
                  class="placeholder:font-compact"
                  placeholder="Enter Card Number"
                />
              </FormControl>
              <InputGroupAddon align="inline-end">
                <InputGroupButton class="w-18.5">Apply</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </FormItem>
        </FormField>
      </Form>
      <dl
        class="grid grid-cols-[3fr_1fr] gap-y-4 *:min-h-8 *:items-center *:text-base [&>dd]:text-right [&>dd]:text-price"
      >
        <dt class="font-bold">Subtotal</dt>
        <dd>{{ order.subTotal }}</dd>

        <dt class="font-compact font-thin">Estimated Tax</dt>
        <dd>{{ order.taxPrice }}</dd>

        <dt class="font-compact font-thin">Estimated shipping & Handling</dt>
        <dd>{{ order.performPrice }}</dd>

        <dt class="font-bold">Total</dt>
        <dd>{{ order.total }}</dd>
      </dl>
      <slot />
    </CardContent>
    <CardFooter>
      <Button @click="dummyCheckout()" size="lg" class="w-full"
        >Checkout</Button
      >
    </CardFooter>
  </Card>
</template>
