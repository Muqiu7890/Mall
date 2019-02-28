import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList'
import Cart from '@/views/Cart'
import Title from '@/views/Title'
import Image from '@/views/Image'

Vue.use(VueRouter)

export default new VueRouter({
    // 指定路由模式
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'GoodsList',
            components: {
                default: GoodsList,
                title: Title,
                img: Image
            }
        },
        {
            path: '/cart/:cartId',
            name: 'cart',
            component: Cart
        }
    ]
})


