import { Navigate, useLocation } from "react-router-dom"
import storage from "@/util/storage";
import { useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useEffect } from "react";
import { setCurrentPage, setTags, setCurrentTag } from "../store/modules/page";


const RouterBeforeEach = props => {
  const title = props?.route?.meta?.title
  console.log('RouterBeforeEach render');
  if(title) {
    document.title = props.route.meta.title
  }
  const location = useLocation()
  const dispatch = useDispatch()
  const { tags} = useSelector(state => ({
    tags: state.page.tags,
  }), shallowEqual)
  const isLogin = !!storage.getStore({name: 'access_token'})

  useEffect(() => {
    if(isLogin && title) {
      dispatch(setCurrentPage(title))
      const obj = {
        name: title,
        path: location.pathname
      }
      dispatch(setCurrentTag(obj))   
      const index = tags.findIndex(item => item.name === title)
      if(index === -1){
        const arr = [...tags]
        arr.push(obj)
        dispatch(setTags(arr))
      }
    }
  },[title,tags,dispatch, location, isLogin])

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