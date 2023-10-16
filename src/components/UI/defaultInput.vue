<template>
  <input :value="modelValue" type="text" @input="updateInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DefaultInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    updateInput(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid navy;
  border-radius: 4px;
}
</style>
