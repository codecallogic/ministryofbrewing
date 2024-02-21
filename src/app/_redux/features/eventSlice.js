import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: '',
    description: '',
    date: ''
  }
}

export const event = createSlice({
  name: 'event',
  initialState,
  reducers: {
    changeEventValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editEvent: (state, action) => {

      const { id, items } = action.payload;

      let foundEvent         = items.find(event => event.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundEvent
        }
      }
      
    },
    changeEventImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    resetEvent: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeEventValue, editEvent, changeEventImages, resetEvent } = event.actions
export default event.reducer