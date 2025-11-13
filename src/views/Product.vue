<script setup lang="ts">
import { computed, ref } from "vue";
import { useWindowSize, watchOnce } from "@vueuse/core";
import { Button } from "@components/ui/button";
import SvgIcon from "@components/lib/SvgIcon.vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@components/ui/carousel";
import productSrcset from "@assets/images/iphone-14.png?w=75;160;448&format=webp&as=srcset";
import productPicture from "@assets/images/iphone-14.png";
const detailSizes = "(max-width: 40rem) 16.5rem, 26rem";

const viewPortWidth = useWindowSize().width;
const isDesktop = computed(() => viewPortWidth.value >= 640);
const carouselThumbsOrientation = computed(() =>
  isDesktop.value ? "vertical" : "horizontal"
);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>

<template>
  <div class="layout-area flex flex-col py-10 lg:py-28 lg:flex-row gap-12">
    <div class="flex-1">
      <div
        class="flex flex-col w-full gap-8 sm:flex-row-reverse sm:w-134 sm:gap-12 sm:h-133 sm:pt-4 m-auto"
      >
        <Carousel
          class="w-full sm:w-104"
          @init-api="(val) => (emblaMainApi = val)"
        >
          <CarouselContent class="m-0">
            <CarouselItem
              v-for="(_, index) in 10"
              :key="index"
              class="w-full flex items-center justify-center p-0"
            >
              <img
                :srcset="productSrcset"
                :src="productPicture"
                :sizes="detailSizes"
                alt="Product card"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <Carousel
          :opts="{
            align: 'start',
          }"
          :key="carouselThumbsOrientation"
          :orientation="carouselThumbsOrientation"
          class="relative sm:py-9"
          @init-api="(val) => (emblaThumbnailApi = val)"
        >
          <CarouselContent class="w-full sm:w-18.5 sm:gap-6 m-0">
            <CarouselItem
              v-for="(_, index) in 10"
              :key="index"
              class="p-0 basis-1/4 cursor-pointer h-16 sm:h-auto flex items-center justify-center"
              :class="index === selectedIndex ? '' : 'opacity-50'"
              @click="onThumbClick(index)"
            >
              <img
                :srcset="productSrcset"
                :src="productPicture"
                alt="Product thumb"
                sizes="4.625rem"
                class="max-w-18.5 h-full sm:h-auto"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <h1 class="text-[2.5rem] mb-6 leading-10">Apple iPhone 14 Pro Max</h1>
          <div class="flex gap-x-4 items-center mb-4">
            <span class="text-price text-[2rem]">1399</span>
            <span
              class="text-price text-2xl line-through text-secondary font-compact font-thin"
              >1499</span
            >
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-6">
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon name="prop-screen-size" class="size-5 text-[#4E4E4E]" />
              <div>
                <div class="text-secondary font-compact">Screen size</div>
                <div>6.7"</div>
              </div>
            </div>
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon name="prop-cpu" class="size-6 text-[#4E4E4E]" />
              <div>
                <div class="text-secondary font-compact">CPU</div>
                <div>Apple A16 Bionic</div>
              </div>
            </div>
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon name="prop-cpu-cores" class="size-6 text-[#4E4E4E]" />
              <div>
                <div class="text-secondary font-compact">Number of Cores</div>
                <div>6</div>
              </div>
            </div>
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon name="prop-camera-main" class="size-5 text-[#4E4E4E]" />
              <div>
                <div class="text-secondary font-compact">Main camera</div>
                <div>48-12 -12 MP</div>
              </div>
            </div>
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon name="prop-camera-front" class="size-5 text-[#4E4E4E]" />
              <div>
                <div class="text-secondary font-compact">Front-camera</div>
                <div>12 MP</div>
              </div>
            </div>
            <div
              class="bg-accent p-4 rounded-lg flex gap-2 items-center leading-tight"
            >
              <SvgIcon
                name="prop-battery-capacity"
                class="size-5 text-[#4E4E4E]"
              />
              <div>
                <div class="text-secondary font-compact">Battery capacity</div>
                <div>4323 mAh</div>
              </div>
            </div>
          </div>
          <p class="font-compact text-secondary">
            Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
            work without rechargingthroughout the day. Incredible photosas in
            weak, yesand in bright lightusing the new systemwith two cameras
            <a href="#" class="link">more...</a>
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" class="sm:flex-1 h-14"
            >Add to Wishlist</Button
          >
          <Button class="sm:flex-1 h-14">Add to Card</Button>
        </div>
        <div class="flex justify-between gap-6 text-center sm:text-left">
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <div class="bg-accent p-4 rounded-xl">
              <SvgIcon name="delivery" class="size-6 text-[#909090C4]" />
            </div>
            <div>
              <div class="text-secondary">Free Delivery</div>
              <div>1-2 day</div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <div class="bg-accent p-4 rounded-xl">
              <SvgIcon name="stock" class="size-6 text-[#909090C4]" />
            </div>
            <div>
              <div class="text-secondary">In Stock</div>
              <div>Today</div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <div class="bg-accent p-4 rounded-xl">
              <SvgIcon name="reward" class="size-6 text-[#909090C4]" />
            </div>
            <div>
              <div class="text-secondary">Guaranteed</div>
              <div>1 year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        <dl
          class="font-compact grid grid-cols-[3fr_1fr] gap-y-6 *:pb-1.5 *:border-b *:min-h-6 *:items-center *:text-base [&>dd]:text-right"
        >
          <dt>Screen diagonal</dt>
          <dd>6.7"</dd>
          <dt>The screen resolution</dt>
          <dd>2796x1290</dd>
          <dt>Screen diagonal</dt>
          <dd>6.7"</dd>
          <dt>The screen resolution</dt>
          <dd>2796x1290</dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="layout-area pt-10 sm:py-22">
    <h3 class="mb-8 text-2xl sm:hidden">Reviews</h3>
    <div
      class="bg-accent w-full sm:w-46 rounded-2xl p-8 grid grid-cols-2 sm:flex flex-col gap-4 text-center"
    >
      <div class="text-[3.5rem] leading-14">4.8</div>
      <div class="text-secondary row-start-2 text-base">of 125 reviews</div>
      <div class="flex row-span-2 place-self-center">
        <SvgIcon
          class="size-6 p-0.5 fill-transparent text-[#FFB547] cursor-pointer"
          v-for="(_, index) in 5"
          :key="index"
          name="star"
        />
      </div>
    </div>
  </div>
  <div class="layout-area py-10 sm:py-20">
    <h3 class="mb-8 text-2xl">Related Products</h3>
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
</template>
