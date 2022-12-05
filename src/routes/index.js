import Login from '@/pages/login/index.jsx'
import Home from '@/pages/home/index.jsx'
import NotFound from '@/pages/404NotFound/index.jsx'
import { Navigate } from 'react-router-dom'


const router = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />

  }
]
export default router