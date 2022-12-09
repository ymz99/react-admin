import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./modules/userInfo";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})
export default store