<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Button } from "@components/ui/button";
import SvgIcon from "@components/lib/SvgIcon.vue";
import { cn } from "@shared/utils";

import iphoneBannerSrcset from "@assets/images/iphone-pairs.png?w=320;406;640;812;1280;1664&format=webp&as=srcset";
import iphoneBannerPicture from "@assets/images/iphone-pairs.png";
import psBannerSrcset from "@assets/images/playstation.png?w=200;360;400;455&format=webp&as=srcset";
import psBannerPicture from "@assets/images/playstation.png";
import macbookBannerSrcset from "@assets/images/macbook.png?w=270;540;960;1412&format=webp&as=srcset";
import macbookBannerPicture from "@assets/images/macbook.png";
import airpodsBannerSrcset from "@assets/images/airpods-max.png?w=200;400;560;1120;1776&format=webp&as=srcset";
import airpodsBannerPicture from "@assets/images/airpods-max.png";
import visionBannerSrcset from "@assets/images/vision-pro.png?w=300;600;634&format=webp&as=srcset";
import visionBannerPicture from "@assets/images/vision-pro.png";
import productSrcset from "@assets/images/iphone-14.png?w=104;160;320;448&format=webp&as=srcset";
import productPicture from "@assets/images/iphone-14.png";
import popularPicture from "@assets/images/popular.png";
import ipadSrcset from "@assets/images/ipad.png?w=360;720;970&format=webp&as=srcset";
import ipadPicture from "@assets/images/ipad.png";
import galaxySrcset from "@assets/images/samsung-galaxy.png?w=326;652;1304&format=webp&as=srcset";
import galaxyPicture from "@assets/images/samsung-galaxy.png";
import bigSummerBannerBgLeft from "@assets/images/big-summer_banner_bg-left.webp?w=561&as=url";
import bigSummerBannerBgLeft2x from "@assets/images/big-summer_banner_bg-left.webp";
import bigSummerBannerBgRight from "@assets/images/big-summer_banner_bg-right.webp?w=399&as=url";
import bigSummerBannerBgRight2x from "@assets/images/big-summer_banner_bg-right.webp";
import bigSummerBannerBgTop from "@assets/images/big-summer_banner_bg-top.webp";
import bigSummerBannerBgBottom from "@assets/images/big-summer_banner_bg-bottom.webp";

const carouselCategories = {
  Phones: "phone",
  "Smart watches": "watch",
  Cameras: "camera",
  Headphones: "headphones",
  Computers: "computer",
  Gaming: "joystick",
};
const carouselTeasers: Record<
  string,
  {
    srcset?: string;
    picture: string;
    bg?: string;
    color?: string;
  }
> = {
  "Popular Products": {
    picture: popularPicture,
  },
  "Ipad Pro": {
    srcset: ipadSrcset,
    picture: ipadPicture,
    bg: "#F9F9F9",
  },
  "Samsung Galaxy": {
    srcset: galaxySrcset,
    picture: galaxyPicture,
    bg: "#EAEAEA",
  },
  "Macbook Pro": {
    srcset: macbookBannerSrcset,
    picture: macbookBannerPicture,
    bg: "#2C2C2C",
    color: "#ffffff",
  },
};
</script>

<template>
  <div
    :class="
      cn(
        'h-192 sm:h-158 max-md:pt-22 text-center sm:text-left text-white flex flex-col md:justify-center',
        'bg-[linear-gradient(90.7deg,#211C24_64%,#211C24_101%)] ',
        'bg-[left_top,right_bottom] bg-no-repeat overflow-hidden'
      )
    "
  >
    <div class="layout-area flex flex-col sm:flex-row items-center gap-8">
      <div class="flex-1 flex flex-col gap-4 lg:gap-6">
        <div class="font-compact text-2xl text-secondary font-thin leading-8">
          Pro.Beyond.
        </div>
        <strong
          class="font-compact text-white text-[4.5rem] leading-18 lg:text-[6rem] lg:leading-18 font-thin"
          >IPhone 14 Pro</strong
        >
        <div class="text-lg text-secondary leading-6 max-sm:px-2">
          Created to change everything for the better. For everyone.
        </div>
        <div class="pt-4 lg:pt-0">
          <Button variant="outline" size="lg" class="w-46.5 text-white"
            >Shop Now</Button
          >
        </div>
      </div>
      <img
        :srcset="iphoneBannerSrcset"
        :src="iphoneBannerPicture"
        class="object-contain flex-1 md:flex-0 sm:-mb-120"
        sizes="(max-width: 48rem) 20rem, 25.375rem"
        alt="IPhone 14 Pro"
      />
    </div>
  </div>
  <div
    class="flex flex-col md:grid grid-cols-2 xl:grid-cols-4 grid-rows-[20.5rem_17rem] 2xl:grid-rows-[25rem_17rem] text-center sm:text-left"
  >
    <div
      :class="
        cn(
          'bg-background text-foreground flex flex-col sm:flex-row items-center py-10 gap-6 sm:pb-0 md:pt-0 min-h-68',
          'sm:gap-10 lg:gap-16 xl:col-span-2 px-4 sm:pl-0 sm:pr-6 md:pr-14 max-md:order-3 overflow-hidden'
        )
      "
    >
      <img
        :srcset="psBannerSrcset"
        :src="psBannerPicture"
        class="object-contain flex-0 sm:ml-6 md:max-lg:-ml-36 lg:-ml-13 2xl:ml-[10%] max-w-[18rem] 2xl:max-w-none 2xl:self-end"
        sizes="(max-width: 48rem) 12.5rem, 20rem"
        alt="Playstation 5"
      />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <h3
          class="max-xl:text-4xl text-5xl max-xl:font-compact xl:font-bold leading-12 text-nowrap"
        >
          Playstation 5
        </h3>
        <p class="max-xl:text-base text-secondary max-xl:font-compact">
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
          redefine your PlayStation experience.
        </p>
      </div>
    </div>
    <div
      :class="
        cn(
          'flex flex-col items-center sm:flex-row xl:flex-row-reverse min-h-68',
          'xl:col-span-2 xl:row-span-2 bg-[#EDEDED] py-10 px-4 sm:pl-0 sm:pr-6 md:pr-14 xl:pr-0 xl:pl-14',
          'gap-6 sm:gap-10 lg:gap-14 max-md:order-4 overflow-hidden'
        )
      "
    >
      <img
        :srcset="macbookBannerSrcset"
        :src="macbookBannerPicture"
        class="object-contain max-sm:mt-4 sm:ml-6 sm:max-md:max-w-50 md:max-w-115 md:-ml-80 lg:-ml-67.5 xl:ml-auto xl:-mr-146 xl:max-w-220 2xl:max-w-240 2xl:-mr-120"
        sizes="(max-width: 48rem) 16.875rem, 60rem"
        alt="Macbook Air"
      />
      <div class="flex flex-col justify-center gap-4">
        <h3
          class="max-xl:text-4xl font-compact text-[4rem] leading-16 font-thin"
        >
          Macbook <span class="xl:font-base xl:font-bold">Air</span>
        </h3>
        <p class="max-xl:text-base text-secondary max-xl:font-compact">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <Button
          variant="outline"
          size="lg"
          class="w-full sm:w-46.5 m-auto sm:m-0"
          >Shop Now</Button
        >
      </div>
    </div>
    <div
      :class="
        cn(
          'bg-[#EDEDED] py-10 px-4 sm:pl-0 sm:pr-6 max-md:order-1 min-h-68 overflow-hidden',
          'flex flex-col items-center sm:flex-row gap-6 sm:gap-10 lg:gap-12 2xl:gap-10'
        )
      "
    >
      <img
        :srcset="airpodsBannerSrcset"
        :src="airpodsBannerPicture"
        class="object-contain flex-0 sm:ml-6 sm:max-w-50 md:-ml-14 md:max-lg:-translate-x-10 lg:ml-9 xl:-ml-25 2xl:ml-[6%]"
        sizes="(max-width: 48rem) 12.5rem, 35rem"
        alt="Apple AirPods Max"
      />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <h3 class="max-xl:text-4xl max-xl:font-compact text-[1.75rem]">
          Apple AirPods Max
        </h3>
        <p class="max-xl:text-base text-secondary max-xl:font-compact">
          Computational audio. Listen, it's powerful
        </p>
      </div>
    </div>
    <div
      :class="
        cn(
          'text-white bg-[#353535] py-10 px-4 sm:pl-0 sm:pr-6 max-md:order-2 min-h-68 overflow-hidden',
          'flex flex-col items-center sm:flex-row gap-6 sm:gap-10 lg:gap-14 xl:gap-6'
        )
      "
    >
      <img
        :srcset="visionBannerSrcset"
        :src="visionBannerPicture"
        class="object-contain flex-0 -scale-x-100 sm:ml-6 max-sm:mt-6 sm:max-w-50 md:max-w-100 md:-ml-65 lg:max-xl:max-w-120 lg:-ml-72 xl:-ml-65 2xl:max-w-120 2xl:-ml-65"
        sizes="(max-width: 48rem) 18.75rem, 39.625rem"
        alt="Apple Vision Pro"
      />
      <div class="flex-1 flex flex-col justify-center gap-4">
        <h3
          class="max-xl:text-4xl max-xl:font-compact text-[1.75rem] text-white"
        >
          Apple Vision Pro
        </h3>
        <p class="max-xl:text-base text-secondary max-xl:font-compact">
          An immersive way to experience entertainment
        </p>
      </div>
    </div>
  </div>
  <div class="bg-accent py-20">
    <div class="layout-area">
      <Carousel
        class="relative"
        :opts="{
          align: 'start',
        }"
      >
        <div class="flex justify-end items-center gap-3 mb-12 sm:mb-7">
          <h2 class="text-2xl flex-1">Browse By Category</h2>
          <CarouselPrevious class="static translate-none hover:bg-[#EDEDED]" />
          <CarouselNext class="static translate-none hover:bg-[#EDEDED]" />
        </div>
        <CarouselContent class="m-0">
          <CarouselItem
            v-for="(_, index) in 5"
            :key="index"
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 p-0 place-items-center gap-4"
          >
            <a
              v-for="(name, title) of carouselCategories"
              class="bg-[#EDEDED] rounded-2xl w-40 h-32 flex flex-col items-center justify-center"
              :key="name"
              href="#"
            >
              <span class="w-16 h-16 flex items-center justify-center">
                <SvgIcon
                  :name="name"
                  class="max-w-16 max-h-16 p-1 text-primary"
                />
              </span>
              <h3 class="text-base font-semibold text-center">
                {{ title }}
              </h3>
            </a>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
  <div class="layout-area py-14">
    <Tabs default-value="new">
      <TabsList class="m-auto sm:m-0">
        <TabsTrigger value="new"> New Arrival </TabsTrigger>
        <TabsTrigger value="bestseller"> Bestseller </TabsTrigger>
        <TabsTrigger value="featured"> Featured Products </TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li
            class="bg-accent flex flex-col items-center gap-2 sm:gap-4 px-3 sm:px-4 pt-5 pb-6 text-center rounded-lg sm:rounded-2xl"
            v-for="(_, index) in 8"
            :key="index"
          >
            <Button
              variant="ghost"
              size="icon-lg"
              class="rounded-3xl self-end hover:[&>svg]:text-primary"
            >
              <SvgIcon
                name="heart_alt"
                class="size-7 fill-transparent text-[#909090C4]"
              />
            </Button>
            <a class="" href="#">
              <img
                :srcset="productSrcset"
                :src="productPicture"
                class="object-contain size-26 sm:size-40"
                sizes="(max-width: 40rem) 6.5rem, 10rem"
                alt="Product"
            /></a>
            <h5 class="text-base">
              <a href="#" class="line-clamp-2 sm:line-clamp-none"
                >Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</a
              >
            </h5>
            <span class="text-price text-2xl font-compact pb-2 max-sm:pt-2"
              >1200</span
            >
            <Button class="w-full max-w-46.5 m-auto">Buy Now</Button>
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="bestseller"> Bestseller!!! </TabsContent>
      <TabsContent value="featured"> Featured Products!!! </TabsContent>
    </Tabs>
  </div>
  <div class="flex overflow-hidden">
    <div
      v-for="(props, title, index) in carouselTeasers"
      :key="index"
      :style="{ backgroundColor: props.bg ? props.bg : undefined }"
      :class="
        cn(
          'flex-[1_0_100%] sm:flex-[1_0_50%] md:flex-[1_0_33.333%] lg:flex-[1_0_25%]',
          'flex flex-col gap-4 py-14 px-8 text-center sm:text-left'
        )
      "
    >
      <div class="flex justify-center items-center w-full h-90">
        <a class="" href="#">
          <img
            :srcset="props?.srcset"
            :src="props.picture"
            class="object-contain size-90"
            sizes="22.5rem"
            alt="Product"
        /></a>
      </div>
      <h4
        class="text-2xl"
        :style="{ color: props.color ? props.color : undefined }"
      >
        {{ title }}
      </h4>
      <p class="text-secondary">
        iPad combines a magnificent 10.2-inch Retina display, incredible
        performance, multitasking and ease of use.
      </p>
      <Button
        variant="outline"
        size="lg"
        class="w-46.5 m-auto sm:m-0"
        :style="{
          color: props.color ? props.color : undefined,
          borderColor: props.color ? props.color : undefined,
        }"
        >Shop Now</Button
      >
    </div>
  </div>
  <div class="layout-area py-10 sm:py-20">
    <h3 class="mb-8 text-2xl">Discounts up to -50%</h3>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-y-6">
      <li
        class="bg-accent flex flex-col items-center gap-2 sm:gap-4 px-3 sm:px-4 pt-5 pb-6 text-center rounded-lg sm:rounded-2xl"
        v-for="(_, index) in 4"
        :key="index"
      >
        <Button
          variant="ghost"
          size="icon-lg"
          class="rounded-3xl self-end hover:[&>svg]:text-primary"
        >
          <SvgIcon
            name="heart_alt"
            class="size-7 fill-transparent text-[#909090C4]"
          />
        </Button>
        <a class="" href="#">
          <img
            :srcset="productSrcset"
            :src="productPicture"
            class="object-contain size-26 sm:size-40"
            sizes="(max-width: 40rem) 6.5rem, 10rem"
            alt="Product"
        /></a>
        <h5 class="text-base">
          <a href="#" class="line-clamp-2 sm:line-clamp-none"
            >Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</a
          >
        </h5>
        <span class="text-price text-2xl font-compact pb-2 max-sm:pt-2"
          >1200</span
        >
        <Button class="w-full max-w-46.5 m-auto">Buy Now</Button>
      </li>
    </ul>
  </div>
  <div
    :style="{
      '--bg-top': `url('${bigSummerBannerBgTop}')`,
      '--bg-bottom': `url('${bigSummerBannerBgBottom}')`,
      '--bg-left': `url('${bigSummerBannerBgLeft}')`,
      '--bg-left-2x': `url('${bigSummerBannerBgLeft2x}')`,
      '--bg-right': `url('${bigSummerBannerBgRight}')`,
      '--bg-right-2x': `url('${bigSummerBannerBgRight2x}')`,
    }"
    :class="
      cn(
        'h-112 px-4 text-white flex items-center justify-center bg-no-repeat',
        // HACK empty url() for twcss generate background-image, not background-color
        'bg-[url(),var(--bg-top),var(--bg-bottom),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'sm:bg-[url(),var(--bg-left),var(--bg-right),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'lg:bg-[url(),var(--bg-left-2x),var(--bg-right-2x),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'bg-position-[center,center_top,center_bottom,center] sm:bg-position-[center,left_top,right_bottom,center]',
        'bg-size-[auto,100%,100%,auto] sm:bg-size-[auto,17.5rem,12.5rem,auto] lg:bg-size-[auto,35.0625rem,24.9375rem,auto]'
      )
    "
  >
    <div class="text-center">
      <strong
        class="font-compact text-white text-5xl lg:text-[4.5rem] font-thin leading-18"
        >Big Summer <span class="lg:font-base lg:font-bold">Sale</span></strong
      >
      <div class="font-compact text-base text-secondary leading-8 mb-10">
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </div>
      <Button variant="outline" size="lg" class="w-46.5 text-white"
        >Shop Now</Button
      >
    </div>
  </div>
</template>
