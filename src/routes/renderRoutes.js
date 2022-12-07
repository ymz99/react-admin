import { Navigate } from "react-router-dom";
import RouterBeforeEach from "./RouterBefore";

const renderRoutes = routes => {
  return routes.map(item => {
    const route = {
      meta: item.meta,
      path: item.path
    }
    if(item.redirect) {
      console.log('ccc');
      route.element = <Navigate to={item.redirect} />
    }
    if(item.component) {
      route.element = <RouterBeforeEach route={item}><item.component /></RouterBeforeEach>
    }
    if(item.children) {
      route.children = renderRoutes(item.children)
    }
    return route
  })
}

export default renderRoutes