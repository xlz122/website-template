import { createApp } from 'vue';
import router from './router';
import store from './store';
import lazyload from './directives/lazyload';
import App from './App.vue';
import './assets/styles/global.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.directive('lazyload', lazyload);
app.mount('#app');
