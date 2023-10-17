<template>
  <div class="posts">
    <h2>Ваши посты</h2>
    <div class="posts__buttons">
      <DefaultButton class="button" @click="toggleModal">
        Создать пост
      </DefaultButton>
      <DefaultSelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <DefaultModal v-model:show="visibleModal">
      <PostForm @create="createPost" />
    </DefaultModal>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { IPosts } from './types/IPosts';
import PostForm from './components/postForm.vue';
import PostList from './components/postList.vue';
import DefaultModal from './components/UI/defaultModal.vue';
import DefaultButton from './components/UI/defaultButton.vue';
import axios, { AxiosResponse } from 'axios';
import DefaultSelect from './components/UI/defaultSelect.vue';

export default {
  components: {
    PostForm,
    PostList,
    DefaultModal,
    DefaultButton,
    DefaultSelect,
  },
  data() {
    return {
      posts: [] as IPosts[],
      visibleModal: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
    };
  },
  watch: {
    selectedSort() {
      this.posts.sort((post1, post2) => {
        const value1 = post1[this.selectedSort as keyof IPosts] as string;
        const value2 = post2[this.selectedSort as keyof IPosts] as string;
        return value1?.localeCompare(value2);
      });
    },
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    createPost(post: IPosts) {
      this.posts.push(post);
      this.visibleModal = false;
    },
    removePost(post: IPosts) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    toggleModal() {
      this.visibleModal = true;
    },
    async fetchPosts() {
      try {
        const response: AxiosResponse<IPosts[], string> = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        this.posts = response.data;
      } catch (err) {
        alert('Ошибка');
      }
    },
  },
};
</script>

<style scoped>
.posts {
  margin: 15px;
}

.posts__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
