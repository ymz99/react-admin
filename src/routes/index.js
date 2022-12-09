import routes from "./routes";
import renderRoutes from './renderRoutes'
import { useRoutes } from "react-router-dom";
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
    <>    
      {useRoutes(renderRoutes(routes))}
    </>

  )
}

export default Router