<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useToast } from 'vue-toast-notification';
  import { useAuthStore } from '../stores/auth.store';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { DefaultTracks } from '../components/models';

  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiPlay, mdiMagnify, mdiLoading } from '@mdi/js'

  import MusicsComponent from '../components/MusicsComponent.vue';
  import PlayMusic from '../components/PlayMusic.vue';

  const search = ref('');
  const btn_state = ref(false);
  const router = useRouter();
  const auth = useAuthStore();
  const toast = useToast();
  const searchRes = ref<DefaultTracks[]>([]);

  const handleSearch = async () => {
    btn_state.value = true
    try {
      const response = await axios.get(`/api/spotify/search?q=${search.value.replace(/\s/g, '')}`);
      console.log(response.data);
      searchRes.value = response.data.result;
      btn_state.value = false;
    } catch (error) {
      btn_state.value = false;
      console.log(error);
    }
  }

  const getMySavedTracks = async () => {
    try {
      const response = await axios.post('/api/spotify/mysavedtracks', { limit: 20, offset: 2 });
      searchRes.value = response.data.result;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(async () => {
    if (router.currentRoute.value.query.code) {
      await auth.handleLoginSpotify(router.currentRoute.value.query.code);
    }

    await getMySavedTracks();
  });

  watch(() => router.currentRoute.value, (oldVal, newVal) => {
    console.log(newVal.query.q)
  });
</script>

<template>
  <div class="flex flex-col gap-5 py-5">
    <div class="grid grid-cols-2">
      <form @submit.prevent="handleSearch"> 
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg-icon class="w-4 h-4 text-gray-500" type="mdi" :path="mdiMagnify"></svg-icon>
          </div>
          <input autocomplete="off" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search songs..., artist..." required v-model="search" />
            <button :disabled=btn_state type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">
              <div v-if="btn_state">
                <svg-icon class="inline w-4 h-4 me-3 text-white animate-spin" type="mdi" :path="mdiLoading"></svg-icon>
                Loading...
              </div>
              <span v-else>
                Search...
              </span>
            </button>
        </div>
      </form>
    </div>
    <div v-if="searchRes.length === 0" class="h-full grow flex flex-col items-center justify-center gap-5">
      <svg-icon class="w-14 h-14 me-3 text-gray-900 animate-spin" type="mdi" :path="mdiLoading"></svg-icon>
      <span class="text-md text-semibold">Loading tracks...</span>
    </div>
    <div v-else class="grid grid-cols-4 justify-center gap-10 relative">
      <MusicsComponent v-for="item in searchRes" :key="item.name" v-bind="item" />
      <!-- <PlayMusic /> -->
    </div>
  </div>
</template>
