<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@components/ui/input-group";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import SvgIcon from "@components/lib/SvgIcon.vue";
import LogoWithSign from "@assets/icons/logo-cyber-sign.svg";
import Logo from "@assets/icons/logo-cyber.svg";
</script>

<template>
  <div class="flex flex-col items-center min-h-screen">
    <header class="w-full border-b border-[#b5b5b5]">
      <div class="layout-area flex justify-between items-center py-4">
        <a href="/" title="На главную"
          ><LogoWithSign class="w-24" alt="Cyber Logo"
        /></a>

        <InputGroup variant="accent" size="lg" class="hidden sm:flex w-93">
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>
            <SvgIcon name="search" class="size-6 p-1 text-[#989898]" />
          </InputGroupAddon>
        </InputGroup>

        <div class="hidden sm:flex gap-6">
          <div class="relative">
            <Button variant="ghost" size="icon" class="rounded-2xl">
              <SvgIcon name="heart" class="size-8 p-1.5 text-primary" />
            </Button>
            <Badge class="absolute -top-1 -right-1.5">1</Badge>
          </div>
          <div class="relative">
            <Button variant="ghost" size="icon" class="rounded-2xl">
              <SvgIcon name="basket" class="size-8 p-1.5 text-primary" />
            </Button>
            <Badge class="absolute -top-1 -right-1.5">2</Badge>
          </div>
        </div>

        <div class="sm:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon-lg" class="rounded-3xl">
                <SvgIcon name="burger" class="size-10 p-2 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              class="w-full px-4 py-18 flex flex-col gap-6 xs:w-[80%]"
            >
              <InputGroup variant="accent" size="lg" class="w-full">
                <InputGroupInput
                  class="text-base text-center"
                  placeholder="Search"
                />
                <InputGroupAddon>
                  <SvgIcon name="search" class="size-6 p-1 text-[#989898]" />
                </InputGroupAddon>
              </InputGroup>

              <Button variant="ghost" size="lg" class="w-full">
                <SvgIcon name="heart" class="size-8 p-1.5 text-primary" />
                <span class="text-base">Избранное</span>
              </Button>

              <Button variant="ghost" size="lg" class="w-full">
                <SvgIcon name="basket" class="size-8 p-1.5 text-primary" />
                <span class="text-base">Корзина (2)</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <main class="w-full grow">
      <slot />
    </main>
    <footer
      class="w-full bg-primary text-primary-foreground text-center sm:text-left"
    >
      <div
        class="layout-area flex flex-col gap-8 py-12 sm:grid grid-cols-[minmax(41%,465px)_minmax(26%,295px)_minmax(26%,295px)] sm:gap-y-6"
      >
        <section>
          <a href="/" class="inline-block m-auto mb-4" title="На главную"
            ><Logo class="w-16.5" alt="Cyber Logo"
          /></a>
          <p class="max-w-84 m-auto sm:max-w-96 sm:m-0">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </section>
        <section class="font-compact">
          <h5 class="text-base mb-2">Services</h5>
          <nav class="leading-loose flex flex-col gap-2">
            <div><a href="#">Bonus program</a></div>
            <div><a href="#">Gift cards</a></div>
            <div><a href="#">Credit and payment</a></div>
            <div><a href="#">Service contracts</a></div>
            <div><a href="#">Non-cash account</a></div>
            <div><a href="#">Payment</a></div>
          </nav>
        </section>
        <section class="font-compact">
          <h5 class="text-base mb-2">Assistance to the buyer</h5>
          <nav class="leading-loose flex flex-col gap-2">
            <div><a href="#">Find an order</a></div>
            <div><a href="#">Terms of delivery</a></div>
            <div><a href="#">Exchange and return of goods</a></div>
            <div><a href="#">Guarantee</a></div>
            <div><a href="#">Frequently asked questions</a></div>
            <div><a href="#">Terms of use of the site</a></div>
          </nav>
        </section>
        <section class="flex gap-9 m-auto col-span-3 sm:m-0">
          <a href="#">
            <SvgIcon name="twitter" class="size-6 sm:size-4" />
          </a>
          <a href="#">
            <SvgIcon name="facebook" class="size-6 sm:size-4" />
          </a>
          <a href="#">
            <SvgIcon name="ticktock" class="size-6 sm:size-4" />
          </a>
          <a href="#">
            <SvgIcon name="instagram" class="size-6 sm:size-4" />
          </a>
        </section>
      </div>
    </footer>
  </div>
</template>
