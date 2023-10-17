<template>
  <div v-if="show" class="dialog" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DefaultModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:show'],
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
});
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  padding: 15px;
  background-color: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 500px;
}
</style>
