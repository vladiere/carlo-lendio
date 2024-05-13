<template>
  <div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" :src="`https://picsum.photos/id/${props.user_id + 20}/200/300`" alt="Jese image">
     <div class="flex flex-col gap-1 w-full">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900">{{ props.name }}</span>
          <span class="text-sm font-normal text-gray-500">{{ props.timestamp }}</span>
        </div>
        <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p class="text-sm font-normal text-gray-900">{{ props.message }}</p>
        </div>
     </div>
  </div>
</template>

<script setup lang="ts">
  import { Message } from './models';
  const props = defineProps<Message>();
</script>
