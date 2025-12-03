<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { APP_ROUTES } from "@app/constants";
import { SearchAutocomplete } from "@features/search";
import { CartBox } from "@features/order";
import { FavsBox } from "@features/favorites";
import { cn } from "@utils";
import LogoWithSign from "@assets/icons/logo-cyber-sign.svg";
import Logo from "@assets/icons/logo-cyber.svg";
import { Header, Footer, BurgerMenu, Menu, SocLinks } from "./components";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div class="flex flex-col items-center min-h-screen">
    <Header>
      <RouterLink
        :to="APP_ROUTES.MAIN"
        :class="$route.path == APP_ROUTES.MAIN ? 'pointer-events-none' : ''"
        title="На главную"
        ><LogoWithSign class="w-24" alt="Cyber Logo"
      /></RouterLink>
      <div class="hidden sm:flex">
        <SearchAutocomplete />
      </div>
      <div class="hidden sm:flex gap-6 items-center">
        <FavsBox variant="icon" />
        <CartBox variant="icon" />
      </div>
      <BurgerMenu />
    </Header>
    <main :class="cn('w-full grow', props.class)">
      <slot />
    </main>
    <Footer>
      <section>
        <RouterLink
          :to="APP_ROUTES.MAIN"
          :class="$route.path == APP_ROUTES.MAIN ? 'pointer-events-none' : ''"
          class="inline-block m-auto mb-4"
          title="На главную"
          ><Logo class="w-16.5" alt="Cyber Logo"
        /></RouterLink>
        <p class="max-w-84 m-auto sm:max-w-96 sm:m-0">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
      </section>
      <section class="font-compact">
        <h5 class="text-base mb-2">Services</h5>
        <Menu
          :items="[
            { name: 'Bonus program' },
            { name: 'Gift cards' },
            { name: 'Credit and payment' },
            { name: 'Service contracts' },
            { name: 'Non-cash account' },
            { name: 'Payment' },
          ]"
        />
      </section>
      <section class="font-compact">
        <h5 class="text-base mb-2">Assistance to the buyer</h5>
        <Menu
          :items="[
            { name: 'Find an order' },
            { name: 'Terms of delivery' },
            { name: 'Exchange and return of goods' },
            { name: 'Guarantee' },
            { name: 'Frequently asked questions' },
            { name: 'Terms of use of the site' },
          ]"
        />
      </section>
      <section class="m-auto col-span-3 sm:m-0">
        <SocLinks
          :items="[
            { icon: 'twitter' },
            { icon: 'facebook' },
            { icon: 'ticktock' },
            { icon: 'instagram' },
          ]"
        />
      </section>
    </Footer>
  </div>
</template>
