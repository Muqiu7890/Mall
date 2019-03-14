import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'

Vue.prototype.$http=axios

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    components: {App}
})