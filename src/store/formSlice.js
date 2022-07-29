import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'dayForm',
  initialState: {
    id: null,
    day: null,
    isIn: null,
    activity: null,
    amount: null
  },
  reducers: {
    updateFormState: (state, action) => {
      state.id = action.payload.id
      state.day = action.payload.day
      state.isIn = action.payload.isIn
      state.activity = action.payload.activity
      state.amount = action.payload.amount
    },
    updateDay: (state, action) => {
      state.day = action.payload
    },
    updateIsIn: (state, action) => {
      state.isIn = action.payload
    },
    updateActivity: (state, action) => {
      state.activity = action.payload
    },
    updateAmount: (state, action) => {
      state.amount = action.payload
    },
    resetFormState: (state) => {
      state.id = null
      state.day = null
      state.isIn = null
      state.activity = null
      state.amount = null
    }
  }
})

export const { updateFormState, updateDay, updateIsIn, updateActivity, updateAmount, resetFormState } = formSlice.actions

export default formSlice.reducer
