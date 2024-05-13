<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useAuthStore } from '../stores/auth.store';
  import { useRouter } from 'vue-router';
  import { DefaultTracks } from '../components/models';
  import { useSocketStore } from '../stores/socket.store';
  import { jwtDecode } from 'jwt-decode';

  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiPlay, mdiMagnify, mdiLoading, mdiSend } from '@mdi/js'

  import ChatsComponent from '../components/ChatsComponent.vue';
  import MusicsComponent from '../components/MusicsComponent.vue';

  import socket from '../utils/socket';

  const auth = useAuthStore();
  const socketStore = useSocketStore();
  const decode = jwtDecode(auth.getAccessToken);

  onMounted(async () => {
    socket.on('connect', () => {
      console.log('You are online');
      socket.emit('user_connected', decode.username);
    })
    socket.on('get_socketId', (data) => {
      console.log(data)
      socketStore.setSocketId(data);
    })
  });
</script>

<template>
  <div class="flex md:grid md:grid-cols-3 h-full">
    <ChatsComponent />

    <div class="col grow overflow-y-auto hidden md:flex flex-col gap-2 p-2 h-full">
      <div class="flex items-center gap-2 border-2 px-2.5 py-1.5 rounded-full">
        <span>
          <svg-icon class="w-8 h-8 text-gray-400 rotate-380" type="mdi" :path="mdiMagnify"></svg-icon>
        </span>
        <input class="outline-none w-full" placeholder="search..."/>
      </div>
      <div class="grow overflow-y-auto flex flex-col gap-2 h-full">
        <MusicsComponent v-for="n in 10" :key="n" :nth="n" />
      </div>
    </div>
  </div>
</template>
