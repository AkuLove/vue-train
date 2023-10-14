<template>
  <div>
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { IPosts } from './types/IPosts';
import PostForm from './components/postForm.vue';
import PostList from './components/postList.vue';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Javascript 0',
          body: 'Описание поста 0',
        },
        {
          id: 2,
          title: 'Javascript 1',
          body: 'Описание поста 1',
        },
        {
          id: 2,
          title: 'Javascript 2',
          body: 'Описание поста 2',
        },
      ],
    };
  },
  methods: {
    createPost(post: IPosts) {
      this.posts.push(post);
    },
  },
};
</script>

<style scoped></style>
