<template>
  <form class="form" @submit.prevent>
    <h4>Создать пост</h4>
    <DefaultInput
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <DefaultInput
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <DefaultButton class="button" @click="createPost"> Создать </DefaultButton>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  emits: ['create'],

  data() {
    return {
      post: {
        id: Date.now(),
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.$emit('create', this.post);
      this.post = {
        id: Date.now(),
        title: '',
        body: '',
      };
    },
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-bottom: 15px;
}
</style>
