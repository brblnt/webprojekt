import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import accommodationService from './accommodationService'

const initialState = {
    accommodations: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create accommodation
export const create = createAsyncThunk(
    'accommodations/create',
    async (accommodationData: any, thunkAPI) => {
      try {
        return await accommodationService.create(accommodationData)
      } catch (error: any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const accommodationSlice = createSlice({
    name: 'accommodation',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
          },
    },
    extraReducers: (builder) => {
        builder
        .addCase(create.pending, (state) => {
            state.isLoading = true
        })
        .addCase(create.fulfilled, (state, action: any) => {
            state.isLoading = false
            state.isSuccess = true
            state.accommodations = action.payload
        })
        .addCase(create.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
        })
    }
})

export const { reset } = accommodationSlice.actions
export default accommodationSlice.reducer