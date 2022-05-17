import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import './asset/tailwind.css';
import './asset/main.css';

createApp(App).use(store).use(router).use(VeeValidatePlugin, { foo: 5 })
  .mount('#app');
