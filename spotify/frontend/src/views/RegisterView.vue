<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:mx-auto sm:w-2/5">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <form class="mx-auto" @submit.prevent="handleRegister">
          <div>
            <h1 class="text-2xl font-semibold">Register an account</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col gap-5">
              <div class="relative">
                <input autocomplete="off" id="fullname" name="fullname" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Fullname" v-model="form.fullname" />
                <label for="fullname" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Fullname</label>
              </div>
              <div class="relative">
                <input autocomplete="off" id="username" name="username" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" v-model="form.username" />
                <label for="username" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
              </div>
              <div class="relative">
                <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" v-model="form.password" />
                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div class="relative flex justify-between items-center">
                <button type="submit" class="bg-blue-500 text-white rounded-md px-3.5 py-1">Submit</button>
                <p class="text-sm">
                  Already have an account? 
                  <router-link to="/login" class="hover:underline hover:text-blue-500">Sign in Now!</router-link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth.store';
  import { useToast } from 'vue-toast-notification';

  const router = useRouter()
    
  const auth = useAuthStore();
  const toast = useToast();

  const btn_state = ref(false);
  const form = ref<{
    fullname: string,
    username: string,
    password: string,
  }>({
    fullname: '',
    username: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      btn_state.value = true;

      const result = await auth.handleRegister(form.value);
      console.log(result)
      if (result.stats === 0) {
        toast.open({
          message: result.msg,
          type: 'warning',
          dismissible: true,
          position: 'top-right',
        })
        btn_state.value = false;
      } else {
        router.push({ name: 'home' })
      }
    } catch (error) {
      toast.open({
        message: "Something is wrong try again.",
        type: 'warning',
        dismissible: true,
        position: 'top-right',
      })
      btn_state.value = false;
    }
  }
</script>
