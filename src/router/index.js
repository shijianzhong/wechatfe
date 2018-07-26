import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'
import main from '@/view/main'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }


    ]
})