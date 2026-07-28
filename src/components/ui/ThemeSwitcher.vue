<script setup lang="ts">
import { Moon, Sun } from "@boxicons/vue";
import { createThemeToggle } from "toggle-theme-circular";
import { onBeforeUnmount, ref } from "vue";

const theme = createThemeToggle();
const currentTheme = ref(theme.current);

const changeTheme = (event: MouseEvent) => {
  theme.toggle(event);
  currentTheme.value = theme.current;
};

onBeforeUnmount(() => theme.destroy());
</script>

<template>
  <button @click="changeTheme" class="cursor-pointer dark:text-white">
    <Transition name="theme-icon" mode="out-in">
      <Moon v-if="currentTheme === 'dark'" key="moon" size="md" />

      <Sun v-else key="sun" size="md" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.2s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.7);
}
</style>
