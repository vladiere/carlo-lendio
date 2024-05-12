<script setup lang="ts">
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiPlay } from '@mdi/js'
</script>

<template>
  <div class="fixed bottom-5 right-14 rounded-full p-10 bg-green-500 w-52 shadow-xl border-2 border-gray-600">
    <div class="flex flex-col items-center justify-center gap-2">
      <div class="flex gap-2 items-center justify-center">
        <span class="py-2 px-2.5 flex items-center rounded-full border-2 border-gray-600">SP</span>
        <span class="text-h3 font-bold">Spotipoof</span>
      </div>
      <span class="text-lg font-semibold capitalize">Music name</span>
      <span class="text-sm capitalize">author name</span>
      <button>
        <div class="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden flex items-center justify-center">
          <svg-icon class="h-8 w-8 text-gray-900" type="mdi" :path="mdiPlay"></svg-icon>
        </div>
      </button>
    </div>
  </div>
</template>

