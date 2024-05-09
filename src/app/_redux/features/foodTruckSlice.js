import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: '',
    images: []
  }
}

export const FoodTruck = createSlice({
  name: 'foodTruck',
  initialState,
  reducers: {
    changeFoodTruckValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editFoodTruck: (state, action) => {

      const { id, items } = action.payload;

      let foundFoodTruck         = items.find(item => item.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundFoodTruck
        }
      }
      
    },
    changeFoodTruckImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    resetFoodTruck: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeFoodTruckValue, editFoodTruck, changeFoodTruckImages, resetFoodTruck } = FoodTruck.actions
export default FoodTruck.reducer