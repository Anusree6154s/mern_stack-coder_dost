import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllOrders } from './adminAPI';

const initialState = {

  totalOrders: 0,
  status: 'idle',

};

export const fetchAllOrdersAsync = createAsyncThunk(
  'admin/fetchAllOrders',
  async ({sort, pagination}) => {
    const response = await fetchAllOrders(sort, pagination);
    return response;
  }
);

export const adminSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload.orders
        state.totalOrders = action.payload.totalOrders
      })
  },
});
export const selectAllOrders = (state) => state.admin.orders;
export const selectTotalOrders = (state) => state.admin.totalOrders


export default adminSlice.reducer;
