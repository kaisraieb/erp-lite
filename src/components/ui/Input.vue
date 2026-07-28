<template>
  <input
    :type="props.type || 'text'"
    :name="props.name"
    :placeholder="props.placeholder"
    @input="props.onInput"
    :title="props.hoverTitle"
    :class="props.cssClasses"
    class="border-none outline-none text-black dark:text-white"
    :id="props.id"
  />
</template>

<script setup lang="ts">
export interface InputPropsType {
  type?: string;
  name?: string;
  placeholder?: string;
  onInput?: () => void;
  cssClasses?: string;
  hoverTitle?: string;
  id?: string;
}

const props = defineProps<InputPropsType>();
</script>
