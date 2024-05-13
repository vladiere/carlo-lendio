<template>
  <div class="flex gap-2 items-center justify-between bg-gray-100 p-2">
    <div class="flex gap-2 items-center">
      <img class="rounded-full h-14 w-14" :src="`https://picsum.photos/200/300?random=${props.nth}`" />
      <span class="flex flex-col">
        <p class="text-h5 font-semibold">Song title</p>
        <p>Song artists</p>
      </span>
    </div>
    <button class="bg-green-500 p-2 rounded-full">
      <svg-icon class="w-8 h-8 text-gray-900 rotate-380" type="mdi" :path="mdiPlay"></svg-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiPlay } from '@mdi/js'
  import { DefaultTracks } from '../components/models';

//  const props = defineProps<DefaultTracks>();
  const props = defineProps<{nth: number}>();
</script>
