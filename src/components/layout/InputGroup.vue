<template>
<div class="flex items-center border-2 rounded-lg px-2 py-3 gap-2 my-8 text-lg dark:bg-gray-800 bg-gray-300 border-gray-500 text-gray-500">
    <label :for="'id-' + props.name">
        <component :is="iconLabel" v-if="props.iconLabel" />
    </label>
    <Input
        :id="'id-' + props.name"
        :type="inputType"
        :name="props.name"
        :placeholder="props.placeholder"
        @input="props.onInput"
        :title="props.hoverTitle"
        :class="props.cssClasses"
    />
    <button type="button" class="cursor-pointer" v-if="props.showHide && props.type === 'password'" @click="handleShowHide">
        <Eye v-if="!isVisible"  />
        <EyeSlash v-if="isVisible" />
    </button>
</div>
</template>

<script setup lang="ts">
import Input, { type InputPropsType } from "@/components/ui/Input.vue";
import { Eye, EyeSlash } from "@boxicons/vue";
import { computed, ref, type Component } from "vue";

const props = defineProps<InputPropsType & {
  showHide?: boolean
  iconLabel?: Component
}>()

const isVisible = ref(false)

const inputType = computed(() => {
  if (props.type !== "password") {
    return props.type ?? "text"
  }

  return isVisible.value ? "text" : "password"
})

const handleShowHide = () => {
  isVisible.value = !isVisible.value
}
</script>
