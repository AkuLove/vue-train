<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DefaultButton',
});
</script>

<style scoped>
.button {
  padding: 4px 8px;
  background-color: inherit;
  border: 1px solid navy;
  cursor: pointer;
  transition: border ease 0.3s;
}
.button:hover {
  border: 1px solid rgb(0, 208, 240);
  transition: border ease 0.3s;
}

.delete {
  margin-top: 10px;
  padding: 4px 8px;
  background-color: inherit;
  border: 1px solid navy;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  transition: all ease 0.3s;
}
.delete:hover {
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(240, 16, 0);
  color: #fff;
  transition: all ease 0.3s;
}
</style>
