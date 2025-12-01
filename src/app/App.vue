<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseLayout from "@layouts/base";
import { Toaster } from "@ui/sonner";
import "@styles/global.css";
import "virtual:svg-icons-register";
import "vue-sonner/style.css";
</script>

<template>
  <Toaster position="top-right" />
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>
