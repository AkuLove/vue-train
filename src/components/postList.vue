<template>
  <div>
    <h3>Список постов</h3>
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import PostItem from './postItem.vue';
import { IPosts } from '../types/IPosts';
import { PropType } from 'vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<IPosts[]>,
      required: true,
    },
  },
};
</script>

<style scoped></style>
