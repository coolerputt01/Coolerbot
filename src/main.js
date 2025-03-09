import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store';
import './registerServiceWorker'
import { createHead } from "@vueuse/head";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
const head = createHead()
app.use(router);
app.use(head); // Use vue-meta for SEO
app.use(store);
app.use(VueLazyLoad);
app.mount('#app');
