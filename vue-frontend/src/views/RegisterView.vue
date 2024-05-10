<template>
  <!-- Container -->
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div
        class="w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <!-- Card Title -->
        <div class="flex flex-col items-center w-full">
          <RouterLink to="/" class="hover:text-gray-600 text-gray-800">
            <IconSpell classes="h-10 w-10" />
          </RouterLink>
          <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Register</h2>
        </div>
        <form class="mt-10" @submit.prevent="handleRegister()">
          <!-- Fullname Input -->
          <label for="fullname" class="block text-xs font-semibold text-gray-600 uppercase"
            >Fullname</label
          >
          <input
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Fullname"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.fullname"
            required
          />
          <!-- E-mail address Input -->
          <label for="email" class="block text-xs font-semibold text-gray-600 uppercase"
            >E-mail Address</label
          >
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail Address"
            autocomplete="email"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.email"
            required
          />
          <!-- Password Input -->
          <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Password</label
          >
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            v-model="form.password"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          />
          <!-- Confirm Password Input -->
          <label
            for="confirm_password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Confrim Password</label
          >
          <input
            id="confirm_password"
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
            v-model="form.password_confirmation"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          />
          <!-- Auth Buttton -->
          <button
            type="submit"
            class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Login
          </button>
          <p class="text-md font-normal text-center mt-4">
            Already have an account?
            <router-link to="/login" class="hover:underline hover:text-blue-500"
              >Sign in now!</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
  <AlertsWarning v-if="message.status === 401" :message="message.message" />
  <AlertsDanger v-else-if="message.status === 500" :message="message.message" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { RegisterRequest } from '../types/auth'
import IconSpell from '../components/icons/IconSpell.vue'
import AlertsDanger from '../components/AlertsDanger.vue'
import AlertsWarning from '../components/AlertsWarning.vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const router = useRouter()
const form = ref<RegisterRequest>({
  fullname: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const message = ref({
  message: '',
  status: null
})

const handleRegister = async () => {
  try {
    if (form.value.password === form.value.password_confirmation) {
      await auth.handleRegister(form.value)
      router.push('/')
    } else {
      message.value.message = 'Password does not match'
      message.value.status = 401
      return
    }
  } catch (error) {
    console.error(error)
    message.value.message =
      error.response.data.errors.password[0] + '\n' + error.response.data.errors.password[1]
    message.value.status = 500
  }
}
</script>
