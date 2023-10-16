<template>
  <div class="posts">
    <PostForm @create="createPost" />
    <PostList :posts="posts" @remove="removePost" />
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
          id: 3,
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
    removePost(post: IPosts) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style scoped>
.posts {
  margin: 15px;
}
</style>
