import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const tsttc473gnxutufsqu_get_getUserDetails_read = createAsyncThunk(
  "tsttc473gnxutufsqu_response_get_GetUserDetails/tsttc473gnxutufsqu_get_getUserDetails_read",
  async payload => {
    const response = await apiService.tsttc473gnxutufsqu_get_getUserDetails_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tsttc473gnxutufsqu_response_get_GetUserDetailsSlice = createSlice({
  name: "tsttc473gnxutufsqu_response_get_GetUserDetails",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        tsttc473gnxutufsqu_get_getUserDetails_read.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        tsttc473gnxutufsqu_get_getUserDetails_read.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        tsttc473gnxutufsqu_get_getUserDetails_read.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  tsttc473gnxutufsqu_get_getUserDetails_read,
  slice: tsttc473gnxutufsqu_response_get_GetUserDetailsSlice
}
