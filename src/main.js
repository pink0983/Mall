import { createApp } from 'vue'
// import Vue from 'vue'
import router from './router'
import App from './App.vue'


// Vue.config.productionTip = false


const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
