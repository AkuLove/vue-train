import { Directive } from 'vue';

export default <Directive>{
  mounted(el, binding) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
