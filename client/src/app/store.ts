import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import accommodationReducer from "../features/accommodation/accommodationSlice";
import bookingReducer from "../features/booking/bookingSlice";
import userReducer from "../features/user/userSlice";
import roomReducer from "../features/room/roomSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    accomm: accommodationReducer,
    booking: bookingReducer,
    user: userReducer,
    room: roomReducer
  },
});

export default store;
