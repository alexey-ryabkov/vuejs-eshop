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
import productSrcset from "@assets/images/airpods-max.png?w=75;150;448&format=webp&as=srcset";
import productPicture from "@assets/images/airpods-max.png";
// const detailSizes = "(max-width: 40rem) 16.5rem, 26rem";
// const listSizes = "(max-width: 48rem) 6.5rem, 10rem";
</script>

<template>
  <div class="layout-area py-10 sm:py-28">
    <div class="w-83 sm:w-87 m-auto">
      <h1 class="text-2xl font-compact">Favorite</h1>
      <ul>
        <li v-for="(_, index) in 3" :key="index">
          <Separator />
          <div class="flex items-center py-4">
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
                <a href="#">AirPods Max Silver</a>
              </h3>
              <span class="font-compact">#25139526913984</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
