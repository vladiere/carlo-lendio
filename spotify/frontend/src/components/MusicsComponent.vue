<template>
  <div class="block rounded-lg bg-gray-200 text-gray-700 shadow-secondary-1 shadow-lg">
    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-twe-ripple-init data-twe-ripple-color="light">
      <img class="rounded-t-lg" :src="props.albums.url" :alt="props.name" />
      <RouterLink :to="{ name: 'play_track', query: { q: props.uri } }">
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
          <div class="bg-green-500 p-5 rounded-full flex justify-center">
            <IconPlay class="ml-1 h-6 w-6 text-gray-900" />
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="p-6 text-surface">
      <h5 class="mb-2 text-lg font-semibold capitalize">{{ props.name }}</h5>
      <div class="flex gap-[2px] capitalize flex-wrap">
        <p v-for="(item, index) in props.artist" :key="item.id" class="text-sm" :id="item.id" >
          {{ index === 0 ? `${item.name}` : index === props.artist.length - 1 ? ` and ${item.name}` : `, ${item.name}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconPlay from '../components/icons/IconPlay.vue';
  import { DefaultTracks } from '../components/models';

  const props = defineProps<DefaultTracks>();
</script>
