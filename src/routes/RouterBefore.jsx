import { Navigate, useLocation } from "react-router-dom"
import storage from "@/util/storage";

const RouterBeforeEach = props => {
  if(props?.route?.meta?.title) {
    document.title = props.route.meta.title
  }
  const location = useLocation()
  const isLogin = !!storage.getStore({name: 'access_token'})
  if(props?.route?.meta?.isLogin) {
    if(!isLogin) {
      return  <Navigate replace={true} to="/login"  state={{ from: `${location.pathname}${location.search}` }} />
    }
  }
  const routerKey = location.pathname 
  if(isLogin && ['/login'].includes(routerKey)) {
    return <Navigate to={'/'} replace/>
  }
  return(
    <>{props.children}</>
  )
}
export default RouterBeforeEach