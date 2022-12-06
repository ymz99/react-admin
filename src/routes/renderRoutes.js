import { Navigate } from "react-router-dom";
import RouterBeforeEach from "./RouterBefore";

const renderRoutes = routes => {
  return routes.map(item => {
    const route = {
      meta: item.meta,
      path: item.path
    }
    if(item.component) {
      route.element = <RouterBeforeEach route={item}><item.component /></RouterBeforeEach>
    }
    if(item.redirect) {
      route.element = <Navigate to={item.redirect} />
    }
    return route
  })
}

export default renderRoutes