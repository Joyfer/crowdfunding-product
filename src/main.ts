import { createApp } from "vue";
import router from './router'
import App from "./App.vue";
import "./index.css";

const app = createApp({});
app.use(router);

createApp(App).use(router).mount('#app')
