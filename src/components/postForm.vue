<template>
  <form class="form" @submit.prevent>
    <h4>Создать пост</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button type="button" class="button" @click="createPost">Добавить</button>
  </form>
</template>

<script lang="ts">
export default {
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
};
</script>

<style scoped>
.form {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
}

.button {
  padding: 4px 8px;
  background-color: inherit;
  border: 1px solid navy;
  border-radius: 4px;
  cursor: pointer;
  transition: border ease 0.3s;
}
.button:hover {
  border: 1px solid rgb(0, 208, 240);
  transition: border ease 0.3s;
}
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid navy;
  border-radius: 4px;
}
</style>
