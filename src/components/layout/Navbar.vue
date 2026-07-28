<template>
  <nav class="w-full h-16 flex items-center justify-center">
    <div class="w-10/12 container mx-auto flex items-center justify-between">
      <!-- logo -->
      <div class="flex gap-3 text-3xl">
        <span class="text-blue-600">ERP</span>
        <span>Lite</span>
      </div>
      <!-- theme switcher -->
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeSwitcher from "../ui/ThemeSwitcher.vue";
</script>
