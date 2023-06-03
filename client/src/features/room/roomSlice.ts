import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "../../types/Room";
import roomService from "./roomService";

const initialState = {
  booking: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const removeRoom = createAsyncThunk(
  "room/remove",
  async (accommodationId: string, thunkAPI) => {
    try {
      return await roomService.remove(accommodationId);
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

export const updateRoom = createAsyncThunk(
  "room/update",
  async (room: Room, thunkAPI) => {
    try {
      return await roomService.update(room);
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

export const roomSlice: any = createSlice({
  name: "room",
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
      .addCase(removeRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeRoom.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(removeRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRoom.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
