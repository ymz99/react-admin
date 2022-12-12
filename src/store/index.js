import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./modules/userInfo";
import pageSliceReducer from './modules/page'

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    page: pageSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})
export default store