<template>
<button
type="button"
:class="props.cssClasses"
@click.prevent="submit"
class="flex items-center justify-center bg-blue-600 w-full px-2 py-3 rounded-lg cursor-pointer transition text-white hover:bg-blue-700 text-lg"
>
    {{ props.text ?? "Submit" }}
</button>
</template>


<script setup lang="ts">

const props = defineProps<{
  text?: string
  submit?: () => void
  cssClasses?: string
}>()

</script>
