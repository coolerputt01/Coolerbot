import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store';
import './registerServiceWorker'
import { createMetaManager } from "vue-meta";

const app = createApp(App);
app.use(router);
app.use(createMetaManager()); // Use vue-meta for SEO
app.use(store);
app.mount('#app');
