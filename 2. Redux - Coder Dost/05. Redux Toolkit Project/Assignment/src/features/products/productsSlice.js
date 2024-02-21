import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, updateProducts } from './productsAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

export const updateAsync = createAsyncThunk(
  'products/updateProduct',
  async ({id, productQuantity}) => {
    const response = await updateProducts(id, productQuantity);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'product',
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
        state.products = action.payload;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex(product=>product.id===action.payload.id)
        state.products.splice(index, 1, action.payload) ;
      });
  },
});

export default productsSlice.reducer;
