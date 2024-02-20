import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, updateItem, deleteItem } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'cart/fetchItem',
  async () => {
    const response = await fetchItems();
    return response.data;
  }
);

export const addAsync = createAsyncThunk(
  'cart/addItem',
  async (item) => {
    const newItem = { ...item, quantity: 1 }
    const response = await addItem(item.quantity ? item : newItem);
    return response.data;
  }
);

export const updateAsync = createAsyncThunk(
  'cart/updateItem',
  async ({ id, itemQuantity }) => {
    const response = await updateItem(id, itemQuantity);
    return response.data;
  }
);

export const deleteAsync = createAsyncThunk(
  'cart/deleteItem',
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(index, 1, action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload)
        state.items.splice(index, 1);
      });
  },
});

export default cartSlice.reducer;
