<template>
  <!-- Container -->
  <div class="flex flex-col h-full bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg" >
        <!-- Card Title -->
        <div class="flex flex-col items-center w-full">
          <RouterLink :to="{ name: 'home' }" class="hover:text-gray-600 text-gray-800">
            <IconSpell classes="h-10 w-10" />
          </RouterLink>
          <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Login</h2>
        </div>
        <form class="mt-10" @submit.prevent="handleLogin">
          <!-- Username Input -->
          <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="username"
            autocomplete="email"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.email"
            required
          />
          <!-- Password Input -->
          <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase" >Password</label>
          <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password" v-model="form.password" class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
          <!-- Auth Buttton -->
          <button :disabled="btn_state" type="submit" class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none" > Login </button>
          <p class="text-md font-normal text-center mt-4"> Don't have an account?
            <RouterLink :to="{ name: 'register' }" class="hover:underline hover:text-blue-500" >Sign up now!</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  import { LoginRequest, RegisterRequest } from '../types/auth';
  import useAuthStore from '../stores/auth.store';
  import IconSpell from '../components/icons/IconSpell.vue';
  import ToastComponent from '../components/toast';

  const btn_state = ref(false);
  const form = ref<LoginRequest>({
    email: '',
    password: ''
  })
  const auth = useAuthStore()
  const router = useRouter()

  const handleLogin = async () => {
    btn_state.value = true;
    if (!form.value.email && !form.value.name && !form.value.password) {
      btn_state.value = false;
      return
    }

    await auth.handleLogin(form.value);
    btn_state.value = false;
    router.push({ name: 'home' });
  }
</script>
