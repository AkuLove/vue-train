<template>
  <div v-if="posts.length > 0" class="posts-list">
    <h3>Список постов</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="removePost(post)"
    />
  </div>
  <h3 v-else>Список постов пуст</h3>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PostItem from './postItem.vue';
import { IPosts } from '../types/IPosts';

export default defineComponent({
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<IPosts[]>,
      required: true,
    },
  },
  emits: ['remove'],
  methods: {
    removePost(post: IPosts) {
      this.$emit('remove', post);
    },
  },
});
</script>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>
