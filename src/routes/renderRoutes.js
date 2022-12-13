import { Navigate } from "react-router-dom";
import RouterBeforeEach from "./RouterBefore";
import { Suspense } from 'react'
import Fallback from "../components/fallback/index";


const renderRoutes = routes => {
  const fun = routes => {
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
        route.children = fun(item.children)
      }
      return route
    })

  }
  let res = fun(routes)
  return res
}

export default renderRoutes