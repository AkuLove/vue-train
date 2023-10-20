import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number;
  }

  // provide typings for <code>this.$store</code>
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
