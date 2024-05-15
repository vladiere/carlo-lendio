<template>
  <!-- Container -->
  <div class="flex flex-col items-center">
    <div class="mt-10 flex flex-col gap-5 w-3/5">
      <div class="flex flex-col gap-2 w-full">
        <label for="cooldown" class="block text-xs font-semibold text-gray-600 uppercase"
          >Article Title</label
        >
        <input
          id="title"
          type="text"
          name="titlex"
          v-model="form.name"
          placeholder="Write your article title"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="description" class="block text-xs font-semibold text-gray-600 uppercase">Description</label>
        <textarea v-model="form.description" id="description" rows="4" class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" placeholder="Write your article descriptions here..."></textarea>
      </div>
      <button :disabled="btn_state" @click="handleCreateArticle" type="submit" class="w-full py-3 mt-2 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none" > Create </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';

  import useUserStore from '../stores/user.store';
  import { ArticleForCreate } from '../components/models';
  import ToastComponent from '../components/toast';

  const user = useUserStore();
  const btn_state = ref(false);
  const form = ref<ArticleForCreate>({
    name: '',
    description: '',
    id: user.getUserId,
  });

  const handleCreateArticle = async () => {
    btn_state.value = true;
    try {
      if (!form.value.name && !form.value.description) {
        new ToastComponent('Fill out the article fields', 'top-right').warning();
        btn_state.value = false;
        return;
      }

      const response = await axios.post('/api/add', form.value);
      if (response.data.success) {
        form.value.name = '';
        form.value.description = '';

        new ToastComponent('Article create successfully', 'top-right').success();
      }
      btn_state.value = false;
    } catch (error) {
      console.error(error);
      btn_state.value = false;
    }
  }
</script>
