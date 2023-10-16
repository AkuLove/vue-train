import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import components from './components/UI/indexUI';

const app = createApp(App);

components.forEach((component, index) => {
  if (component.name) {
    app.component(component.name, component);
  } else {
    app.component(`component${index}`, component);
  }
});

app.mount('#app');
