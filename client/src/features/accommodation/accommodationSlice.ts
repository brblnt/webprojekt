import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Accommodation } from "../../types/Accommodation";
import accommodationService from "./accommodationService";
const initialState = {
  accommodations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create accommodation
export const create = createAsyncThunk(
  "accommodations/create",
  async (accommodationData: any, thunkAPI) => {
    try {
      return await accommodationService.create(accommodationData);
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

export const getaccomms = createAsyncThunk(
  "accommodations/get",
  async (userData: any, thunkAPI) => {
    try {
      return await accommodationService.getaccomm(userData);
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

export const remove = createAsyncThunk(
  "accommodations/remove",
  async (accommodationData: any, thunkAPI) => {
    try {
      return await accommodationService.remove(accommodationData);
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

export const addRoom = createAsyncThunk(
  "accommodations/addRoom",
  async ({ roomData, accommData }: any, thunkAPI) => {
    try {
      return await accommodationService.room(roomData, accommData);
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
  "accommodations/update",
  async (accommodation: any, thunkAPI) => {
    try {
      return await accommodationService.update(accommodation);
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

export const accommodationSlice: any = createSlice({
  name: "accomm",
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
      .addCase(create.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accommodations = action.payload;
      })
      .addCase(create.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getaccomms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaccomms.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accommodations = action.payload;
      })
      .addCase(getaccomms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(addRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRoom.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accommodations = state.accommodations.map((item: any) => {
          if (item.id === action.payload.id) {
              return action.payload;
          }
          return item;
      });
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(remove.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(remove.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accommodations = state.accommodations.filter(
          (accommodation: any) => accommodation.id !== action.payload.id
        );
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

export const { reset } = accommodationSlice.actions;
export default accommodationSlice.reducer;
