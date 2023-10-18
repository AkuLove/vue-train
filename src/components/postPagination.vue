<template>
  <div class="pagination">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="pagination__item"
      :class="{
        pagination__item_current: pageNumber === page,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  emits: ['changePagination'],
  methods: {
    changePage(pageNumber: number) {
      this.$emit('changePagination', pageNumber);
    },
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 15px;
  column-gap: 5px;
  justify-content: center;
}

.pagination__item {
  border: 1px solid black;
  padding: 6px 8px;
  cursor: pointer;
}

.pagination__item_current {
  border: 2px solid black;
  font-weight: 500;
}
</style>
