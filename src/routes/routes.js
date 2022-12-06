import React from 'react'

const Login = React.lazy(() => import('@/pages/login/index.jsx'))
const Home = React.lazy(() => import('@/pages/home/index.jsx'))
const NotFound = React.lazy(() => import('@/pages/404NotFound/index.jsx'))

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录',
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      isLogin: true,
      isMenu: true
    },
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