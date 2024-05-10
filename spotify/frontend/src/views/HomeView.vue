<script setup lang="ts">
  import { useAuthStore } from '../stores/auth.store';

  const auth = useAuthStore();

  console.log(auth.getAccessToken);
</script>

<template>
</template>
