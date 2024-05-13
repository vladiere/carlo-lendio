<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { jwtDecode } from 'jwt-decode';

  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiSend } from '@mdi/js'

  import ChatBubble from '../components/ChatBubble.vue';
  import { Message } from './models';
  import NewUserDivider from '../components/NewUserDivider.vue';

  import { useAuthStore } from '../stores/auth.store';
  import { useSocketStore } from '../stores/socket.store';
  import { timestamp } from '../utils/formatted';
  import socket from '../utils/socket';

  const auth = useAuthStore();
  const socketStore = useSocketStore();
  const text = ref('');
  const new_user = ref('');
  const messages = ref<Message[]>([]);
  const decode = jwtDecode(auth.getAccessToken);
  const send = ref<Message>({
    socketId: socketStore.getSocketId,
    name: decode.username,
    timestamp: timestamp(),
    user_id: decode.user_id,
    message: '',
  });

  const sendMessage = () => {
    if (text.value === '') {
      return;
    }

    send.value.message = text.value;
    socket.emit('send_message', send.value)
    text.value = '';
  }

  socket.on('get_message', data => {
    messages.value = data;
  })
  onMounted(() => {
    socket.on('messages', data => {
      messages.value = data;
    })
    socket.on('new_user', data => {
      new_user.value = data;
    })
  })
</script>

<template>
  <div class="md:col-span-2 grow overflow-y-auto md:border-r-2 md:border-gray-300 flex flex-col h-full">
    <div class="grow overflow-y-auto h-full p-2 flex flex-col-reverse gap-2">
      <div class="flex flex-col gap-2">
        <ChatBubble v-for="item in messages" :key="item.message" v-bind="item" />
      </div>
      <NewUserDivider v-if="new_user" :name="new_user" />
    </div>
    <div class="flex items-center px-3.5 py-2 border-t-2 border-gray-300 w-full">
      <input class="outline-none w-full" placeholder="Message..." v-model="text" @keyup.enter="sendMessage" />
      <button class="bg-transparent outline-none border-0 p-0 m-0" @click="sendMessage">
        <svg-icon class="w-8 h-8 text-gray-500 rotate-380" type="mdi" :path="mdiSend"></svg-icon>
      </button>
    </div>
  </div>
</template>
