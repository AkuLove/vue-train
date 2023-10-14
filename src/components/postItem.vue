<template>
  <div class="post">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </div>
</template>

<script lang="ts">
import { IPosts } from '../types/IPosts';
import { PropType } from 'vue';

export default {
  props: {
    post: {
      type: Object as PropType<IPosts>,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 16px;
  margin: 16px;
  border: 1px solid navy;
  border-radius: 8px;
}
</style>
