<template>
  <nav
    class="w-full h-20 flex items-center justify-center bg-transparent z-20 absolute top-0 left-0 fixed"
  >
    <div class="w-10/12 container mx-auto flex items-center justify-between">
      <!-- logo -->
      <div class="flex gap-3 text-3xl">
        <RouterLink to="/">
          <img
            src="../../assets/images/logo.png"
            alt="Logo"
            class="max-w-full w-28 dark:grayscale transition"
          />
        </RouterLink>
      </div>
      <!-- theme switcher -->
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeSwitcher from "../ui/ThemeSwitcher.vue";
</script>
