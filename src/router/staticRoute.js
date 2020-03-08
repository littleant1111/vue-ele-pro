const Layout = () => import(/* webpackChunkName: 'index' */ '../views/layout')
// const Login = () => import('../views/login')
const staticRoute = [
    {
        path: '/',  // 默认跳转
        redirect: '/app',
    },
    {
        path: '/error',  // 错误页面
        component: () => import(/* webpackChunkName: 'error' */ '../views/error'),
        children: [
            {
                path: '401',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/401')
            },
            {
                path: '403',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/403')
            },
            {
                path: '404',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/404')
            },
            {
                path: '500',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/500')
            }
        ]
    },
    // {
    //     path: '/login',  // 登录
    //     component: () => import(/* webpackChunkName: 'login' */ '../views/login')
    // },
    {
        path: '/app',  // 主页
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../App.vue'),
            }
        ]
    },
    {
        path: '/example',
        component: Layout,
        children: [
            // {
            //     path: '',
            //     component: () => import(/* webpackChunkName: 'components' */ '../views/components')
            // },
            {
                path: 'testpagea',  // 介绍1
                component: () => import(/* webpackChunkName: 'components' */ '../views/example/TestPageA')
            },
            {
                path: 'testpageb',  // 介绍2
                component: () => import(/* webpackChunkName: 'components' */ '../views/example/TestPageB')
            },
            {
                path: 'testpagec',  // 介绍3
                component: () => import(/* webpackChunkName: 'components' */ '../views/example/TestPageC')
            },
        ]
    },
    {
        path: '/test2',
        component: Layout,
        children: [
            {
                path: 'testpagea2',  // 表格
                component: () => import(/* webpackChunkName: 'example' */ '../views/test2/TestPageA2')
            },
            {
                path: 'testpageb2',  // 表格
                component: () => import(/* webpackChunkName: 'example' */ '../views/test2/TestPageB2')
            },
            {
                path: 'testpagec2',  // 表格
                component: () => import(/* webpackChunkName: 'example' */ '../views/test2/TestPageC2')
            },
        ]
    },
    {
        path: '*',  // 其他页面
        redirect: '/error/404'
    }
]

export default staticRoute
