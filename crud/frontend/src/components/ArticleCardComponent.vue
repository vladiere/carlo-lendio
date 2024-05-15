<template>
  <div class="flex flex-col gap-5 p-5 rounded-lg bg-gray-200 relative">
    <div class="grid grid-cols-3">
      <span class="col-span-2 text-4xl font-bold text-gray-700 capitalize">{{ props.name }}</span>
      <span class="col text-right text-lg font-semibold text-gray-500">by: {{ `${props.user.fullname.charAt(0).toUpperCase()}${props.user.fullname.slice(1)}` }}</span>
    </div>
    <span class="text-md mb-4">{{ `${props.description.charAt(0).toUpperCase()}${props.description.slice(1)}` }}</span>
    <div class="absolute bottom-2 flex items-center pt-5">
      <span class="text-sm text-gray-400">Posted: {{ date_string(props.created_at) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Article } from '../components/models';
  import { date_string } from '../functions/format_date';

  const props = defineProps<Article>();
  console.log('Article card: ',props.user);
</script>
