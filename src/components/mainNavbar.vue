<template>
  <div class="navbar">
    <div class="navbar__title">Vue train</div>
    <div class="navbar__buttons">
      <DefaultButton class="button" @click="$router.push('/')"
        >Главная</DefaultButton
      >
      <DefaultButton class="button" @click="$router.push('/posts')"
        >Посты</DefaultButton
      >
      <DefaultButton class="button" @click="$router.push('/store')"
        >Стор посты</DefaultButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultButton from './UI/defaultButton.vue';

export default defineComponent({ components: { DefaultButton } });
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__title {
  flex: 1 1 auto;
}

.navbar__buttons {
  display: flex;
  column-gap: 20px;
}
</style>
