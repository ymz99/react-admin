import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: '首页',
  },
  reducers: {
    setCurrentPage(state, {payload}) {
      state.currentPage = payload
    },
  }
})

export const { setCurrentPage } = pageSlice.actions
export default pageSlice.reducer