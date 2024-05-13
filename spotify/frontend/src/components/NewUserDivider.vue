<template>
  <div class="grid grid-cols-3 items-center w-full">
    <div class="border-[1px] border-gray-400 w-full"></div>
    <span class="text-h5 text-semibold text-center">{{ `${props.name.charAt(0).toUpperCase()}${props.name.slice(1)}` }} has joined</span>
    <div class="border-[1px] border-gray-400 w-full"></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{name: string;}>();
</script>
