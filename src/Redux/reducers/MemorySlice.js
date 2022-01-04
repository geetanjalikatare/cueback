import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RecentPublishedApi } from "../../components/api/api";

export const fetchMemoryAsync = createAsyncThunk(
  "memory/recentPublishedApi",
  async (obj) => {
    const response = await RecentPublishedApi(obj);
    return response;
  }
);
const initialState = {
  data: [],
  status: "",
  filters: {
    All: 1,
    Me: 1,
    "My Friends": 1,
    "Non Friends": 1,
  },
};

export const MemorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      Object.keys(action.payload).map((item) => {
        if (action.payload[item] % 2 !== 0) {
          state.filters[item] = 1;
        } else {
          state.filters[item] = 0;
        }
      });
    },
  },
  extraReducers: {
    [fetchMemoryAsync.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMemoryAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    },
    [fetchMemoryAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { addFilter } = MemorySlice.actions;
export const selectData = (state) => state.memory.data;
export const selectFilters = (state) => state.memory.filters;

export default MemorySlice.reducer;
