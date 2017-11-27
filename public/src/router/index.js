import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Itunes from '@/components/Itunes'
import Mytunes from '@/components/Mytunes'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, ]
})