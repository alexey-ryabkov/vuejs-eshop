<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@components/ui/number-field";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@components/ui/input-group";
import { Button } from "@components/ui/button";
import SvgIcon from "@components/ui/svg-icon";
import { Separator } from "@components/ui/separator";
import productSrcset from "@assets/images/iphone-14.png?w=75;150;448&format=webp&as=srcset";
import productPicture from "@assets/images/iphone-14.png";
</script>

<template>
  <div
    class="layout-area py-10 sm:py-28 flex flex-col md:flex-row gap-x-12 gap-y-10"
  >
    <div class="@container basis-1/2">
      <h1 class="text-2xl font-compact mb-10">Shopping cart</h1>
      <ul>
        <li
          v-for="(_, index) in 3"
          :key="index"
          class="last:*:data-[slot='separator-root']:hidden"
        >
          <div
            class="grid grid-cols-[6.625rem_1fr] gap-y-4 @md:grid-cols-[6.625rem_1fr_1fr] py-4"
          >
            <div
              class="w-26.5 pr-4 row-span-2 @md:row-span-1 flex justify-center items-center"
            >
              <a href="#">
                <img
                  :srcset="productSrcset"
                  :src="productPicture"
                  class="object-contain size-22.5"
                  alt="Product"
                  sizes="5.625rem"
              /></a>
            </div>

            <div>
              <h3 class="text-base font-thin md:font-bold mb-2">
                <a href="#">Apple iPhone 14 Pro Max 128Gb Deep Purple</a>
              </h3>
              <span class="font-compact">#25139526913984</span>
            </div>

            <div class="flex items-center justify-between @md:gap-6">
              <NumberField
                class="w-28.5"
                id="quantity"
                :default-value="1"
                :min="1"
              >
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
              <span class="text-price text-xl">1399</span>
              <Button variant="ghost" size="icon" class="rounded-2xl">
                <SvgIcon name="cross" class="size-6 p-1 text-primary" />
              </Button>
            </div>
          </div>
          <Separator />
        </li>
      </ul>
    </div>
    <div class="basis-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Form class="flex flex-col gap-6 mb-6">
            <FormField name="code">
              <FormItem>
                <FormLabel for="input-code"
                  >Discount code / Promo code</FormLabel
                >
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
            <dd>2347</dd>

            <dt class="font-compact font-thin">Estimated Tax</dt>
            <dd>50</dd>

            <dt class="font-compact font-thin">
              Estimated shipping & Handling
            </dt>
            <dd>50</dd>

            <dt class="font-bold">Total</dt>
            <dd>2347</dd>
          </dl>
        </CardContent>
        <CardFooter>
          <Button size="lg" class="w-full">Checkout</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
