<script setup lang="ts">
  import { onMounted } from 'vue';
  import useAuthStore from '../stores/auth.store'
  import useUserStore from '../stores/user.store';
  import IconSpell from '../components/icons/IconSpell.vue'

  const auth = useAuthStore()
  const user = useUserStore();
  
  onMounted(async () => {
    await auth.getCSRFToken();
    const response = await auth.getUserDetails();
    user.setUserDetails(response.data)
  })
</script>

<template>
  <div class="flex flex-col h-dvh w-dvw">
    <div class="flex items-center justify-between px-10 py-4 bg-gray-800 text-gray-100 w-full border-b border-gray-600">
      <h3 class="text-4xl text-bold flex gap-3 items-center">
        <IconSpell classes="h-10 w-10" />
        README.md
      </h3>
      <div class="flex gap-5 items-center">
        <div v-if="!auth.auth" class="flex gap-5 items-center">
          <RouterLink to="/login" class="hover:underline hover:text-blue-500">Login</RouterLink>
          <RouterLink to="/register" class="hover:underline hover:text-blue-500" >Register</RouterLink>
        </div>
        <div v-else class="flex gap-5 items-center">
          <RouterLink :to="{ name: 'home' }" class="hover:underline hover:text-blue-500">Home</RouterLink>
          <RouterLink :to="{ name: 'create' }" class="hover:underline hover:text-blue-500">Write article</RouterLink>
          <RouterLink :to="{ name: 'my article' }" class="hover:underline hover:text-blue-500" >My articles</RouterLink>
          <button @click="auth.handleLogout()" class="hover:underline hover:text-blue-500"> Logout </button>
        </div>
      </div>
    </div>
    <div class="grow overflow-y-auto flex flex-col h-full p-5 bg-gray-100 pb-10">
      <RouterView />
    </div>
  </div>
</template>
