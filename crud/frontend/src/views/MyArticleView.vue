<template>
  <div class="grow overflow-y-auto grid grid-cols-2 gap-5">
    <MyArticleComponent v-for="(item, index) in my_articles" :key="index" v-bind="item" @changes="listenToComponent" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import axios from 'axios';

  import useUserStore from '../stores/user.store';
  import { ArticleForOne } from '../components/models';
  import MyArticleComponent from '../components/MyArticleComponent.vue';

  const user = useUserStore();
  const my_articles = ref<ArticleForOne[]>([]);

  const listenToComponent = async (state) => {
    console.log(state);
    await getMyArticles();
  }

  const getMyArticles = async () => {
    try {
      my_articles.value = [];
      const response = await axios.get(`/api/resource/${user.getUserId}`);
      my_articles.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(async () => {
    await getMyArticles();
  });

  onBeforeUnmount(() => {
    my_articles.value = []
  })
</script>
