<template>
  <div class="w-full h-screen">
    <!-- navbar -->
    <Navbar />
    <div class="grid 2xl:grid-cols-2 grid-cols-1 w-full h-screen">
      <!-- left panel -->
      <div
        class="w-full h-full dark:text-white hidden 2xl:flex max-w-full bg-center bg-cover dark:grayscale transition"
        :style="`background-image: url(${currentLeftImage})`"
      ></div>
      <!-- right panel -->
      <div class="w-full h-full dark:bg-gray-900 dark:text-white">right</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { computed } from "vue";
import signupImage from "@/assets/images/signup.jpg";
import loginImage from "@/assets/images/login.jpg";
import { useRoute } from "vue-router";

const route = useRoute();

const currentLeftImage = computed(() => {
  return route.fullPath === "/auth/signup" ? signupImage : loginImage;
});
</script>
