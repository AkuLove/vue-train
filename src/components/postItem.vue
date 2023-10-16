<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post-buttons">
      <DefaultButton class="delete" @click="removePost">
        Удалить пост
      </DefaultButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPosts } from '../types/IPosts';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPosts>,
      required: true,
    },
  },
  emits: ['remove'],
  methods: {
    removePost() {
      this.$emit('remove', this.post);
    },
  },
});
</script>

<style scoped>
.post {
  padding: 16px;
  border: 1px solid navy;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
