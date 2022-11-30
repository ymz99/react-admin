import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storage from "../../util/storage";
import * as loginApi from '../../api/modules/login/index'



const getCodeAction = createAsyncThunk('fetch/getCode',async (extraInfo, { dispatch, getState }) => {
  const res = await loginApi.getCode()
  dispatch(setCodeInfo(res.data.data))
})


const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    codeInfo: {},
    tenantId: '',
    access_token: storage.getStore({name: 'access_token'}) || ''
  },
  reducers: {
    setCodeInfo(state, {payload}) {
      state.codeInfo = payload
    },
    saveTenantId(state, {payload}) {
      state.tenantId = payload
    },
    logOut() {
      console.log('logout');
    } 
  }
})

export { getCodeAction }
export const { saveTenantId, logOut, setCodeInfo } = userSlice.actions
export default userSlice.reducer