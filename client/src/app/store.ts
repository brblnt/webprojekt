import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import accommodationReducer from '../features/accommodation/accommodationSlice'
import bookingReducer from '../features/booking/bookingSlice'


const store = configureStore({
  reducer: {
  auth: authReducer,
  accomm: accommodationReducer,
  booking: bookingReducer
  },
  })

export default store