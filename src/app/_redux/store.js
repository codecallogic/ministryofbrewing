import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import beerReducer from './features/beerSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    beerReducer
  },
})