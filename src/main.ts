import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import components from './components/UI/indexUI';
import router from './router/router';
import Vintersection from './directives/VIntersection';
import VFocus from './directives/VFocus';

const app = createApp(App);

components.forEach((component, index) => {
  if (component.name) {
    app.component(component.name, component);
  } else {
    app.component(`component${index}`, component);
  }
});

app.directive('intersection', Vintersection);
app.directive('focus', VFocus);

app.use(router).mount('#app');
