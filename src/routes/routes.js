import Login from '@/pages/login/index.jsx'
import Layout from '@/pages/layout/index.jsx'
import Home from '@/pages/home/index.jsx'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Layout,
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
    redirect: '/login',
  }
]

export default routes