<template>
  <div v-if="articles.length !== 0" class="grid grid-cols-2 gap-5">
    <ArticleCardComponent v-for="item in articles" :key="item.id" v-bind="item" />
  </div>
  <div v-else class="h-full flex flex-col items-center justify-center gap-5">
    <span class="text-3xl font-semibold text-gray-600">No articles available</span>
    <span class="text-2xl font-semibold text-gray-600">Create an article</span>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineAsyncComponent, onBeforeUnmount } from 'vue'
  import axios from 'axios'

  import { Article } from '../components/models';
  import ArticleCardComponent from '../components/ArticleCardComponent.vue';

  const articles = ref<Article[]>([]);

  const getResources = async () => {
    try {
      const response = await axios.get('/api/resources');
      articles.value = response.data;
      console.log(articles.value);
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(async () => {
    await getResources();
  });

  onBeforeUnmount(() => {
    articles.value = [];
  })
</script>
