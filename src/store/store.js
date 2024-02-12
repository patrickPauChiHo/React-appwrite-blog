import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    //add reducers
    auth: authSlice,
  },
});

export default store;
