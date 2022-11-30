import Login from '@/pages/login/index'
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
]
export default router