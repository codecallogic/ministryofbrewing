import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import beerReducer from './features/beerSlice'
import eventReducer from './features/eventSlice'
import foodTruckReducer from './features/foodTruckSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    beerReducer,
    eventReducer,
    foodTruckReducer
  },
})