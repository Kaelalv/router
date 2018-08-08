import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import About from '@/components/About'
import Service from '@/components/Service'
import ServiceDetail from '@/components/ServiceDetail'
import NotFoundPage from '@/components/NotFoundPage'


Vue.use(Router)

const routes = [
    { path: '/hello', name: 'hello', component: Hello },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/service', name: 'service', component: Service },
    { path: '/service/:id', name: 'ServiceDetail', component: ServiceDetail },
    { path: '*', component: NotFoundPage },
];
export default new Router({
    base: '/',
    scrollBehavior: function(to, from, savedPosition) {
        return savedPosition;
    },
    routes
})