<template>
  <div class="posts">
    <h2>Ваши посты</h2>
    <DefaultInput
      v-model="searchQuery"
      placeholder="Найти пост..."
      class="input"
    />
    <div class="posts__buttons">
      <DefaultButton class="button" @click="toggleModal">
        Создать пост
      </DefaultButton>
      <DefaultSelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <DefaultModal v-model:show="visibleModal">
      <PostForm @create="createPost" />
    </DefaultModal>
    <PostList
      v-if="!isPostLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else>Идет загрузка...</div>
    <PostPagination
      :total-pages="totalPages"
      :page="page"
      @change-pagination="changePage"
    />
  </div>
</template>

<script lang="ts">
import { IPosts } from './types/IPosts';
import PostForm from './components/postForm.vue';
import PostList from './components/postList.vue';
import PostPagination from './components/postPagination.vue';
import DefaultModal from './components/UI/defaultModal.vue';
import DefaultButton from './components/UI/defaultButton.vue';
import axios, { AxiosResponse } from 'axios';
import DefaultSelect from './components/UI/defaultSelect.vue';
import DefaultInput from './components/UI/defaultInput.vue';

export default {
  components: {
    PostForm,
    PostList,
    DefaultModal,
    DefaultButton,
    DefaultSelect,
    DefaultInput,
    PostPagination,
  },
  data() {
    return {
      posts: [] as IPosts[],
      visibleModal: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
    };
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        const value1 = post1[this.selectedSort as keyof IPosts] as string;
        const value2 = post2[this.selectedSort as keyof IPosts] as string;
        return value1?.localeCompare(value2);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title
          .toLocaleLowerCase()
          .trim()
          .includes(this.searchQuery.toLowerCase().trim())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
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
    changePage(pageNumber: number) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response: AxiosResponse<IPosts[], string> = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
      } catch (err) {
        alert('Ошибка');
      } finally {
        this.isPostLoading = false;
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
