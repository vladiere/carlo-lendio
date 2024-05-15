<template>
  <div v-if="!edit" class="flex flex-col gap-5 p-5 rounded-lg bg-gray-200 relative">
    <div class="flex items-center gap-3 absolute top-2 right-2">
      <button v-if="!edit" class="text-red-500" @click="handleRemove">
        <svg-icon type="mdi" :path="mdiDeleteOutline"></svg-icon>
      </button>
      <button @click="edit = !edit">
        <svg-icon type="mdi" :path="mdiNoteEditOutline"></svg-icon>
      </button>
    </div>
    <span class="col-span-2 text-4xl font-bold text-gray-700 capitalize">{{ props.name }}</span>
    <span class="text-md mb-4">{{ `${props.description.charAt(0).toUpperCase()}${props.description.slice(1)}` }}</span>
    <div class="absolute bottom-2 flex items-center pt-5">
      <span class="text-sm text-gray-400">Posted: {{ date_string(props.created_at) }}</span>
    </div>
  </div>

  <div v-else class="flex flex-col gap-5 p-5 rounded-lg bg-gray-200 relative">
    <button class="absolute top-2 right-2" @click="edit = !edit">
      <svg-icon type="mdi" :path="mdiNoteEdit"></svg-icon>
    </button>
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
        class="block w-full py-3 px-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
        required
      />
    </div>
    <div class="flex flex-col gap-2 w-full">
      <label for="description" class="block text-xs font-semibold text-gray-600 uppercase">Description</label>
      <textarea v-model="form.description" id="description" rows="4" class="block w-full py-3 px-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" placeholder="Write your article descriptions here..."></textarea>
    </div>
    <button :disabled="btn_state" @click="handleUpdate" type="button" class="w-full mb-4 py-3 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none" > Save changes </button>
    <div class="absolute bottom-2 flex items-center pt-5">
      <span class="text-sm text-gray-400">Posted: {{ date_string(props.created_at) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiNoteEditOutline, mdiNoteEdit, mdiDeleteOutline } from '@mdi/js'

  import { ArticleForOne, ArticleForUpdate } from '../components/models';
  import useUserStore from '../stores/user.store';
  import { date_string } from '../functions/format_date';
  import ToastComponent from '../components/toast';

  const user = useUserStore();
  const props = defineProps<ArticleForOne>();
  const btn_state = ref(false);
  const edit = ref(false);
  const form = ref<ArticleForUpdate>({
    id: user.getUserId,
    name: props.name,
    description: props.description,
    status: 'active',
  });
  const emit = defineEmits<{
    (e: 'click', state: boolean): boolean 
  }>()
  
  const handleRemove = async () => {
    try {
      const response = await axios.post('/api/remove', { id: props.id });
      if (response.data.success) {
        new ToastComponent('Article removed', 'top-right').success();
        edit.value = false;
        emit('changes', true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.post('/api/update', form.value);
      if (response.data.stats) {
        new ToastComponent('Article updated successfully', 'top-right').success();
        edit.value = false;
        emit('changes', true);
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>
