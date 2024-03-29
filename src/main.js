import { createApp } from 'vue'
// import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// console.log(Vue);
// import env from './env'
//mock开关
const mock = true;
if (mock){
    require('./mock/api');
}
//根据前端跨域方式作调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status == 0){
        return res.data;
    } else if (res.status == 10){
        // 未登录就跳转到登录页  这里this并不指向vue 所以要用此方法进行跳转
        window.location.href = '/#/login';
    }else{
        alert(res.msg);
    }
});




const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios;
app.mount('#app')


// Vue.use(VueAxios,axios);
// Vue.config.productionTip = false;
// createApp(App).mount('#app')
