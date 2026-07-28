<template>
  <div class="flex items-center justify-between flex-col">
    <div class="flex text-center flex-col justify-center">
      <h1 class="text-2xl font-bold ">Welcome Back</h1>
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

        <SubmitButton text="Login" />
    </form>
  </div>
</template>

<script setup lang="ts">
import InputGroup from '@/components/layout/InputGroup.vue';
import SubmitButton from '@/components/ui/SubmitButton.vue';
import { Envelope, Lock } from '@boxicons/vue';


</script>
