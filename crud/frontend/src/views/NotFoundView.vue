<template>
  <div class="h-screen flex flex-col gap-5 items-center justify-center bg-gray-200 dark:bg-gray-800 dark:text-gray-200">
    <span class="text-4xl font-bold">404 | Not Found</span>
    <button @click="router.back()" class="border border-gray-800 dark:border-gray-200 px-4 py-2.5 rounded">Return</button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>
