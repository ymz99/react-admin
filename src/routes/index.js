import routes from "./routes";
import renderRoutes from './renderRoutes'
import { useRoutes } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import formatRoute from './formatRoute'
import { useCallback } from "react";

const Router = () => {
  console.log('Router');
  const {menu} = useSelector(state => ({
    menu: state.userInfo.menu
  }), shallowEqual)

  const fun = useCallback(menu => formatRoute(menu), [])
  const render = useCallback(routes => renderRoutes(routes), [])
  if(Array.isArray(menu)){
    const formatMenu = fun(menu)
    routes[1].children = [...routes[1].children, ...formatMenu]
  }
  return (
    <>    
      {useRoutes(render(routes))}
    </>

  )
}

export default Router