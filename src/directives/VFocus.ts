import { Directive } from 'vue';

export default <Directive>{
  mounted(el) {
    el.focus();
  },
};
