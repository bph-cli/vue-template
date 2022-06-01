import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout/index.vue';
export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/dashboard/dashboard'
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        name: 'Login',
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/errorPage/401'),
        hidden: true
    },
    {
        path: '/dashboard',
        component: Layout,
        meta: { title: '首页', icon: 'dashboard' },
        redirect: '/dashboard/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/dashboard'),
                meta: { title: '首页', icon: 'dashboard' }
            }
        ]
    }
];

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});

export const asyncRouterMap = [
    {
        path: '/error',
        component: Layout,
        redirect: 'noredirect',
        name: 'errorPages',
        meta: {
            title: 'errorPages',
            icon: '404'
        },
        children: [
            {
                path: '401',
                component: () => import('@/views/errorPage/401'),
                name: 'page401',
                meta: { title: 'page401', noCache: true }
            },
            {
                path: '404',
                component: () => import('@/views/errorPage/404'),
                name: 'page404',
                meta: { title: 'page404', noCache: true }
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
];
//解决路由重复跳转控制台报错，重定义router的push方法，抛出错误
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};
