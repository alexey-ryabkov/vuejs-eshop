<script setup lang="ts">
import { CategoriesCarousel } from "@features/categories";
import { DiscountedProducts } from "@features/products-list";
import { Button } from "@components/ui/button";
import { buildProductLink, cn } from "@app/utils";
import TopBanner from "./components/TopBanner.vue";
import BottomBanner from "./components/BottomBanner.vue";
import TileBanners from "./components/TileBanners.vue";
import ProductsTabs from "./components/ProductsTabs.vue";
import {
  TeasersCarousel,
  TeasersCarouselItem,
} from "./components/teasers-carousel";

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

const TOP_BANNER_PRODUCT_ID = 23;
const BIG_TILE_BANNER_PRODUCT_ID = 97;
</script>

<template>
  <TopBanner>
    <template #picture>
      <img
        :srcset="iphoneBannerSrcset"
        :src="iphoneBannerPicture"
        class="object-contain flex-1 md:flex-0 sm:-mb-120"
        sizes="(max-width: 48rem) 20rem, 25.375rem"
        alt="IPhone 14 Pro"
      />
    </template>
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
      <Button
        @click="$router.push(buildProductLink(TOP_BANNER_PRODUCT_ID))"
        variant="outline"
        size="lg"
        class="w-46.5 text-white"
        >Shop Now</Button
      >
    </div>
  </TopBanner>
  <TileBanners>
    <template #long-tile-picture>
      <img
        :srcset="psBannerSrcset"
        :src="psBannerPicture"
        class="object-contain flex-0 sm:ml-6 md:max-lg:-ml-36 lg:-ml-13 2xl:ml-[10%] max-w-[18rem] 2xl:max-w-none 2xl:self-end"
        sizes="(max-width: 48rem) 12.5rem, 20rem"
        alt="Playstation 5"
      />
    </template>
    <template #long-tile-text>
      <h3
        class="max-xl:text-4xl text-5xl max-xl:font-compact xl:font-bold leading-12 text-nowrap"
      >
        Playstation 5
      </h3>
      <p class="max-xl:text-base text-secondary max-xl:font-compact">
        Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
        redefine your PlayStation experience.
      </p>
    </template>
    <template #big-tile-picture>
      <img
        :srcset="macbookBannerSrcset"
        :src="macbookBannerPicture"
        class="object-contain max-sm:mt-4 sm:ml-6 sm:max-md:max-w-50 md:max-w-115 md:-ml-80 lg:-ml-67.5 xl:ml-auto xl:-mr-146 xl:max-w-220 2xl:max-w-240 2xl:-mr-120"
        sizes="(max-width: 48rem) 16.875rem, 60rem"
        alt="Macbook Air"
      />
    </template>
    <template #big-tile-text>
      <h3 class="max-xl:text-4xl font-compact text-[4rem] leading-16 font-thin">
        Macbook <span class="xl:font-base xl:font-bold">Air</span>
      </h3>
      <p class="max-xl:text-base text-secondary max-xl:font-compact">
        The new 15‑inch MacBook Air makes room for more of what you love with a
        spacious Liquid Retina display.
      </p>
      <Button
        @click="$router.push(buildProductLink(BIG_TILE_BANNER_PRODUCT_ID))"
        variant="outline"
        size="lg"
        class="w-full sm:w-46.5 m-auto sm:m-0"
        >Shop Now</Button
      >
    </template>
    <template #left-tile-picture>
      <img
        :srcset="airpodsBannerSrcset"
        :src="airpodsBannerPicture"
        class="object-contain flex-0 sm:ml-6 sm:max-w-50 md:-ml-14 md:max-lg:-translate-x-10 lg:ml-9 xl:-ml-25 2xl:ml-[6%]"
        sizes="(max-width: 48rem) 12.5rem, 35rem"
        alt="Apple AirPods Max"
      />
    </template>
    <template #left-tile-text>
      <h3 class="max-xl:text-4xl max-xl:font-compact text-[1.75rem]">
        Apple AirPods Max
      </h3>
      <p class="max-xl:text-base text-secondary max-xl:font-compact">
        Computational audio. Listen, it's powerful
      </p>
    </template>
    <template #right-tile-picture>
      <img
        :srcset="visionBannerSrcset"
        :src="visionBannerPicture"
        class="object-contain flex-0 -scale-x-100 sm:ml-6 max-sm:mt-6 sm:max-w-50 md:max-w-100 md:-ml-65 lg:max-xl:max-w-120 lg:-ml-72 xl:-ml-65 2xl:max-w-120 2xl:-ml-65"
        sizes="(max-width: 48rem) 18.75rem, 39.625rem"
        alt="Apple Vision Pro"
      />
    </template>
    <template #right-tile-text>
      <h3 class="max-xl:text-4xl max-xl:font-compact text-[1.75rem] text-white">
        Apple Vision Pro
      </h3>
      <p class="max-xl:text-base text-secondary max-xl:font-compact">
        An immersive way to experience entertainment
      </p>
    </template>
  </TileBanners>
  <div class="bg-accent py-20">
    <div class="layout-area">
      <CategoriesCarousel>
        <template #caption>
          <h2 class="text-2xl flex-1">Browse By Category</h2>
        </template>
      </CategoriesCarousel>
    </div>
  </div>
  <ProductsTabs />
  <TeasersCarousel>
    <TeasersCarouselItem title="Popular Products">
      <template #picture>
        <img
          :src="popularPicture"
          class="object-contain size-90"
          sizes="22.5rem"
          alt="Popular Products"
      /></template>
      <p class="text-secondary">
        iPad combines a magnificent 10.2-inch Retina display, incredible
        performance, multitasking and ease of use.
      </p>
    </TeasersCarouselItem>
    <TeasersCarouselItem title="Ipad Pro" background-color="#F9F9F9">
      <template #picture>
        <img
          :srcset="ipadSrcset"
          :src="ipadPicture"
          class="object-contain size-90"
          sizes="22.5rem"
          alt="Ipad Pro"
      /></template>
      <p class="text-secondary">
        iPad combines a magnificent 10.2-inch Retina display, incredible
        performance, multitasking and ease of use.
      </p>
    </TeasersCarouselItem>
    <TeasersCarouselItem title="Samsung Galaxy" background-color="#EAEAEA">
      <template #picture>
        <img
          :srcset="galaxySrcset"
          :src="galaxyPicture"
          class="object-contain size-80"
          sizes="20rem"
          alt="Samsung Galaxy"
      /></template>
      <p class="text-secondary">
        iPad combines a magnificent 10.2-inch Retina display, incredible
        performance, multitasking and ease of use.
      </p>
    </TeasersCarouselItem>
    <TeasersCarouselItem
      title="Macbook Pro"
      color="#FFFFFF"
      background-color="#2C2C2C"
    >
      <template #picture>
        <img
          :srcset="macbookBannerSrcset"
          :src="macbookBannerPicture"
          class="object-contain size-90"
          sizes="22.5rem"
          alt="Macbook Pro"
      /></template>
      <p class="text-secondary">
        iPad combines a magnificent 10.2-inch Retina display, incredible
        performance, multitasking and ease of use.
      </p>
    </TeasersCarouselItem>
  </TeasersCarousel>
  <DiscountedProducts />
  <BottomBanner
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
        // HACK empty url() for twcss generate background-image, not background-color
        'bg-[url(),var(--bg-top),var(--bg-bottom),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'sm:bg-[url(),var(--bg-left),var(--bg-right),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'lg:bg-[url(),var(--bg-left-2x),var(--bg-right-2x),linear-gradient(100.23deg,#2E2E2E_42.36%,#000000_98.65%)]',
        'bg-position-[center,center_top,center_bottom,center] sm:bg-position-[center,left_top,right_bottom,center]',
        'bg-size-[auto,100%,100%,auto] sm:bg-size-[auto,17.5rem,12.5rem,auto] lg:bg-size-[auto,35.0625rem,24.9375rem,auto]',
        'bg-no-repeat'
      )
    "
  >
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
  </BottomBanner>
</template>
