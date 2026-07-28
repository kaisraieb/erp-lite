<template>
  <div class="flex items-center justify-between flex-col">
    <div class="flex text-center flex-col justify-center">
      <h1 class="text-2xl font-bold">Welcome Back</h1>
      <p class="text-gray-500">Please log in to your account.</p>
    </div>
    <form action="" class="pt-8">
      <InputGroup
        name="email-login"
        type="email"
        :iconLabel="Envelope"
        placeholder="Email"
      />

      <InputGroup
        type="password"
        :showHide="true"
        name="password-login"
        :iconLabel="Lock"
        placeholder="Password"
      />

      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-2">
          <Input
            type="checkbox"
            name="remember-me-input"
            id="id-remember-me-input"
          />
          <label for="id-remember-me-input" class="select-none"
            >Remember Me</label
          >
        </div>
        <RouterLink
          to="/account/forget-password"
          class="text-blue-600 underline"
          >Forget Password ?</RouterLink
        >
      </div>

      <SubmitButton text="Login" />

      <!--       <div class="mt-8 w-full flex items-center justify-center gap-2">
        <span> Don't have an account? </span>
        <RouterLink to="/auth/signup" class="text-blue-600 underline"
          >Sign up</RouterLink
        >
      </div> -->
    </form>
  </div>
</template>

<script setup lang="ts">
import InputGroup from "@/components/layout/InputGroup.vue";
import Input from "@/components/ui/Input.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
import { Envelope, Lock } from "@boxicons/vue";
</script>
