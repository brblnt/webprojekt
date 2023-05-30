import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../../types/Booking";
import bookingService from "./bookingService";

const initialState = {
  booking: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const remove = createAsyncThunk(
  "booking/remove",
  async (accommodationId: string, thunkAPI) => {
    try {
      return await bookingService.remove(accommodationId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const update = createAsyncThunk(
  "booking/update",
  async (booking: Booking, thunkAPI) => {
    try {
      return await bookingService.update(booking);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookingSlice: any = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(remove.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(remove.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(remove.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(update.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;
