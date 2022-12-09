import { Navigate } from "react-router-dom";
import RouterBeforeEach from "./RouterBefore";
import { Suspense } from 'react'
import Fallback from "../components/fallback/index";

const renderRoutes = routes => {
  return routes.map(item => {
    const route = {
      meta: item.meta,
      path: item.path
    }
    if(item.redirect) {
      route.element = <Navigate to={item.redirect} />
    }
    if(item.component) {
      route.element = 
      <Suspense fallback={<Fallback />}>
        <RouterBeforeEach route={item}><item.component /></RouterBeforeEach>
      </Suspense>
    }
    if(item.children) {
      route.children = renderRoutes(item.children)
    }
    return route
  })
}

export default renderRoutes