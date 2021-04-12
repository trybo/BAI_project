import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader.vue'
//import axios from 'axios'

//Vue.prototype.$http

// createApp(App).use(router).mount('#app')

const app = createApp(App)



app.use(router);

app.component('TheHeader', TheHeader);

app.mount('#app');