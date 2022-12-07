import React from 'react'
import Login from '@/pages/login/index.jsx'
import Layout from '@/pages/layout/index.jsx'
const Home = React.lazy(() => import('@/pages/home/index.jsx'))
const NotFound = React.lazy(() => import('@/pages/404NotFound/index.jsx'))

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      isLogin: true,
    },
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          isLogin: true,
        }
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录',
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: '404 NOT FOUNT',
    }
  }
]

export default routes