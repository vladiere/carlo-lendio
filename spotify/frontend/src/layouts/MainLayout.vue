<template>
  <div class="h-screen flex flex-col">
    <div class="flex mx-12 py-3 border-b-2 border-gray-200 items-center">
      <RouterLink :to="{ name: 'home_view' }" class="flex gap-2 items-center">
        <span class="py-2 px-2.5 flex items-center rounded-full border-2 border-gray-600">SP</span>
        <span class="text-h2 font-bold">Spotipoof</span>
      </RouterLink>
      <span class="mx-auto"></span>
      <div class="flex gap-5">
        <button @click="handleLogout" class="hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Logout</button>
      </div>
    </div>
    <div class="grow overflow-y-auto mx-12 h-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '../stores/auth.store.ts'
  import { useRouter } from 'vue-router';

  const auth = useAuthStore();
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await auth.handleLogout();
      router.push({ name: 'login' })
    } catch (error) {
      console.error(error)
    }
  }
</script>
