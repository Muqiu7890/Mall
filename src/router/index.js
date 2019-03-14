import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'GoodsList',
          components: {
              default: GoodsList,
          //     title: Title,
          //     img: Image
          }
      },
      // {
      //     path: '/cart/:cartId',
      //     name: 'cart',
      //     component: Cart
      // }
  ]
})


