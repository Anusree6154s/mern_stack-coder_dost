import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchAsyncFulfilled = createAction('cart/fetchItems/fulfilled')
export const addAsyncFulfilled = createAction('cart/addItems/fulfilled')
export const fetchAsync = createAction('cart/fetchItems/pending')
export const addAsync = createAction('cart/addItems/pending')
export const updateAsync = createAction('cart/updateItems/pending')
export const deleteAsync = createAction('cart/deleteItems/pending')

// export const fetchAsync = createAsyncThunk(
//   'cart/fetchItem',
//   async () => {
//     const response = await fetchItems();
//     return response.data;
//   }
// );

// export const addAsync = createAsyncThunk(
//   'cart/addItem',
//   async (item) => {
//     const newItem = {...item, quantity:1}
//     const response = await addItem(newItem);
//     return response.data;
//   }
// );

// export const updateAsync = createAsyncThunk(
//   'cart/updateItem',
//   async ({id, itemQuantity}) => {
//     const response = await updateItem(id, itemQuantity);
//     return response.data;
//   }
// );

// export const deleteAsync = createAsyncThunk(
//   'cart/deleteItem',
//   async (id) => {
//     await deleteItem(id);
//     return id;
//   }
// );

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsync, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload) ;
      })
      .addCase(updateAsync, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index, 1, action.payload) ;
      })
      .addCase(deleteAsync, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=>item.id===action.payload)
        state.items.splice(index, 1) ;
      });
  },
});

export default cartSlice.reducer;
