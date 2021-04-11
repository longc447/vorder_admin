import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Api from '@/config/telnet/api'
import Http from '@/config/telnet/http'
let app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')

app.config.globalProperties.$Api = Api;
app.config.globalProperties.$http=Http;