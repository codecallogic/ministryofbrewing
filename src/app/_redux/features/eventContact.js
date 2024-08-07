import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: '',
    email: '',
    phone: '',
    guests: '',
    description: ''
  }
}

export const eventContact = createSlice({
  name: 'eventContact',
  initialState,
  reducers: {
    changeEventContactValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editEventContact: (state, action) => {

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
    changeEventContactImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    resetEventContact: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeEventContactValue, editEventContact, changeEventContactImages, resetEventContact } = eventContact.actions
export default eventContact.reducer