<template>
  <div
    class="flex items-center justify-center flex-col w-full min-h-screen dark:bg-gray-800 dark:text-white"
  >
    <Navbar />
    <div class="w-full h-[calc(100vh-64px)] flex items-center justify-center">
      <div class="max-w-3xl bg-gray-200 dark:bg-gray-900 w-xl rounded-2xl p-4">
        <!-- auth-tabs -->
        <div class="flex items-center justify-between px-2 py-3">
          <button
            class="text-center flex-1 py-3 cursor-pointer"
            @click="switchToTab('login')"
            :class="{
              'bg-gray-300 rounded-lg dark:bg-gray-800': activeTab === 'login',
            }"
          >
            Login
          </button>
          <button
            class="text-center flex-1 py-3 cursor-pointer"
            @click="switchToTab('signup')"
            :class="{
              'bg-gray-300 rounded-lg dark:bg-gray-800': activeTab === 'signup',
            }"
          >
            Sign Up
          </button>
        </div>
        <div class="mt-10 px-2 py-3 flex items-center justify-center">
          <RouterView v-slot="{ Component, route }">
            <Transition name="auth" mode="out-in" appear>
              <component :is="Component" :key="route.fullPath"></component>
            </Transition>
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

type ActiveTabType = "login" | "signup";

const activeTab = ref<ActiveTabType>("login");
const router = useRouter();

const switchToTab = (tabName: ActiveTabType): void => {
  if (tabName === activeTab.value) {
    return;
  }

  activeTab.value = tabName;
  router.push({ name: tabName });
};
</script>

<style scoped>
.auth-enter-active,
.auth-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.auth-enter-from {
  opacity: 0;
  transform: translateX(24px) scale(0.98);
}

.auth-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.auth-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.auth-leave-to {
  opacity: 0;
  transform: translateX(-24px) scale(0.98);
}
</style>
