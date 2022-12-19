import { createApp } from 'vue'
import { createPinia } from "pinia";
import { setOptions } from "./api/HttpService";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

import './styles/global.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);
setOptions({ url: import.meta.env.VITE_BASE_URL });
app.mount('#app');
