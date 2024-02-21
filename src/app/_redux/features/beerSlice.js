import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: '',
    avb: '',
    style: '',
    images: []
  }
}

export const beer = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    changeBeerValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editBeer: (state, action) => {

      const { id, items } = action.payload;

      let foundBeer         = items.find(beer => beer.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundBeer
        }
      }
      
    },
    changeBeerImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    resetBeer: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeBeerValue, editBeer, changeBeerImages, resetBeer } = beer.actions
export default beer.reducer