import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import accommodationReducer from '../features/accommodation/accommodationSlice'

const store = configureStore({
  reducer: {
  auth: authReducer,
  accommodation: accommodationReducer
  },
  })

export default store