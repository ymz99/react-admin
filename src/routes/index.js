import routes from "./routes";
import renderRoutes from './renderRoutes'
import { useRoutes } from "react-router-dom";
import { Suspense } from 'react'
import Fallback from "../components/fallback/index";
import { useSelector, shallowEqual } from "react-redux";
import formatRoute from './formatRoute'

const Router = () => {
  const {menu} = useSelector(state => ({
    menu: state.userInfo.menu
  }), shallowEqual)

  if(Array.isArray(menu)){
    const formatMenu = formatRoute(menu)
    routes[1].children = [...routes[1].children, ...formatMenu]
  }

  return (
    <Suspense fallback={<Fallback />}>
      {useRoutes(renderRoutes(routes))}
    </Suspense>
  )
}

export default Router