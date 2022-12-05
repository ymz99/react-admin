import { memo } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import router from './index.js';
import stroage from "@/util/storage";

const white = [
  '/home'
]

const RouterBefore = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  if(white.includes(location.pathname) && !stroage.getStore({name: 'refresh_token'})) {
    console.log('cc');

    navigate('/login')
  }
  return useRoutes(router)
})

export default RouterBefore