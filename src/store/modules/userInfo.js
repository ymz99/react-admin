import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storage from "../../util/storage";
import { encryption } from "../../util/encryption";
import * as loginApi from '../../api/modules/login/index'
import { getMenu } from "../../api/modules/menu";
import path from "../../data/path";
import { history } from '@/routes/history.js'

const getCodeAction = createAsyncThunk('fetch/getCode',async (extraInfo, { dispatch, getState }) => {
  const res = await loginApi.getCode()
  dispatch(setCodeInfo(res.data.data))
})

const loginByUsername = createAsyncThunk('fetch/getCode',async (extraInfo, { dispatch, getState }) => {
  const user = encryption({
    data: extraInfo,
    key: 'pigxpigxpigxpigx',
    param: ['password']
  })
  const res = await loginApi.loginByUsername(user.username, user.password, user.code, user.randomStr,user.w1)
  dispatch(setBaseInfo(res.data))
  dispatch(setPermissions(res.data))
  return res.data
})

const getMenuAction = createAsyncThunk('fetch/getMenu', async (extraInfo, { dispatch, getState }) => {
  await getMenu()
  const data = getState().userInfo.menu

  if(JSON.stringify(data) !== JSON.stringify(path)){
    dispatch(setMenu(path))
  }
})

const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    codeInfo: {},
    tenantId: '',
    roles: [],
    userInfo: storage.getStore({name: 'userInfo'}) || '',
    permissions: storage.getStore({name: 'permissions'}) || '',
    menu: storage.getStore({name: 'menu'}) || '',
    tenant_id: storage.getStore({name: 'tenant_id'}) || '',
    access_token: storage.getStore({name: 'access_token'}) || '',
    refresh_token: storage.getStore({name: 'refresh_token'}) || '',

  },
  reducers: {
    setCodeInfo(state, {payload}) {
      state.codeInfo = payload
    },
    saveTenantId(state, {payload}) {
      state.tenantId = payload
    },
    setBaseInfo(state, {payload}) {
      const { access_token, refresh_token, expires_in, user_info: userInfo} = payload
      const obj = {access_token, refresh_token, expires_in, userInfo}
      for(let key in obj) {
        state[key] = obj[key]
        storage.setStore({
          name: key,
          content: obj[key],
          type: 'session'
        })
      }
    },
    setPermissions(state, {payload}) {
      const permissions = payload.user_info.authorities || []
      const list = {}
      for (let i = 0; i < permissions.length; i++) {
        list[permissions[i].authority] = true
      }
      state.permissions = list
      storage.setStore({
        name: 'permissions',
        content: list,
        type: 'session'
      })
    },
    setMenu(state, {payload}) {
      state.menu = payload
      storage.setStore({
        name: 'menu',
        content: payload,
        type: 'session'
      })
    },
  
    logOut(state) {
      storage.clearStore({
        type: 'sessionStorage',
      })
      history.replace('/login')
      history.go()
    } 
  }
})

export { getCodeAction, loginByUsername, getMenuAction }
export const { saveTenantId, logOut, setCodeInfo, setBaseInfo, setPermissions, setMenu } = userSlice.actions
export default userSlice.reducer