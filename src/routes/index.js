import Login from '@/pages/login/index'
import Home from '@/pages/home/index.jsx'
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
  }
]
export default router