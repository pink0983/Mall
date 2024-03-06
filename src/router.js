// import Vue from 'vue'
// vue2引入插件的写法
// import Router from 'vue-router'

import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

// 使用插件
// Vue.use(Router);

const routerHistory = createWebHistory()


const router = createRouter({
    history: routerHistory,
    // 配置子路由
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },{
                    // 获取动态路由
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },{
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component:Cart,
        },
        {
            path: '/order',
            name: 'order',
            component:Order,
            children:[
                {
                    path: 'list',
                    name: 'order-list',
                    component:OrderList,
                },{
                    path: 'confirm',
                    name: 'order-confirm',
                    component:OrderConfirm,
                },{
                    path: 'pay',
                    name: 'order-pay',
                    component:OrderPay,
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component:AliPay,
                }
            ]
        },

    ]

});