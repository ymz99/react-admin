import axios from "axios";
import { BASE_URL, TIMEOUT} from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import qs from 'qs'
import stroage from "../../util/storage";
import store from "../../store";
import { logOut } from "../../store/modules/userInfo";
import errorCode from './errorCode'
import { history } from "../../routes/history";
import { notification } from 'antd';

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL,
  validateStatus(status){
    return status >= 200 && status <= 500 // 默认的
  },
  withCredentials: true
})

NProgress.configure({
  showSpinner: false
})

instance.interceptors.request.use(config => {
  NProgress.start()
  const TENANT_ID = stroage.getStore({ name: 'tenantId' })
  const isToken = (config.headers || {}).isToken === false
  const token = store.getState().userInfo.access_token
  if(token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  if(TENANT_ID) {
    config.headers['TENANT-ID'] = TENANT_ID
  }
  if (config.method === 'post' && config.headers.serialize) {
    config.data = qs.stringify(config.data)
    delete config.data.serialize
  }
  if (config.method === 'get') {
    config.paramsSerializer =  params =>  qs.stringify(params, { arrayFormat: 'repeat' })
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  NProgress.done()
  const status = Number(res.status) || 200
  const errMessage = res.data.msg || errorCode[status] || errorCode['default']
  if(status === 401) {
    notification.error({
      description: '请重新登录',
      duration: 2,
    })
    store.dispatch(logOut());
    history.replace('/login')
  }
  if (status !== 200 || res.data.code === 1) {
    notification.error({
      description: errMessage,
      duration: 2,
    })
    return Promise.reject(new Error(errMessage))
  }
  return res
}, error => {
  NProgress.done()
  return Promise.reject(new Error(error))
})
export default instance