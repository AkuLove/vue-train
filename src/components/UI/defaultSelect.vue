<template>
  <select :value="modelValue" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISelect } from '../../types/ISelect';
export default defineComponent({
  name: 'DefaultSelect',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<ISelect[]>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  methods: {
    changeOptions(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style scoped></style>
