import { createSlice } from "@reduxjs/toolkit";
import storage from "../../util/storage";

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: '首页',
    tags: storage.getStore({name: 'tags'}) || [],
    currentTag: {},
  },
  reducers: {
    setCurrentPage(state, {payload}) {
      state.currentPage = payload
    },
    setTags(state, {payload}) {
      state.tags = payload
      storage.setStore({
        name: 'tags',
        content: payload,
        type: 'session'
      })
    },
    setCurrentTag(state, {payload}){
      state.currentTag = payload
    }
  }
})

export const { setCurrentPage, setTags, setCurrentTag } = pageSlice.actions
export default pageSlice.reducer