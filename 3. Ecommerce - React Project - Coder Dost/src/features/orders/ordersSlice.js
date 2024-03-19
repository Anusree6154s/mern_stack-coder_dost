import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, updateOrder } from './ordersAPI';

const initialState = {
    orders: [],
    currentOrder: null,
    status: 'idle',
};

export const createOrderAsync = createAsyncThunk(
    'orders/createOrder',
    async (item) => {
        const response = await createOrder(item);
        return response.data;
    }
);

export const updateOrderAsync = createAsyncThunk(
    'orders/updateOrder',
    async (order) => {
        const response = await updateOrder(order);
        return response.data;
    }
);

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetOrder: (state) => {
            state.currentOrder = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrderAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrderAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.orders.push(action.payload);
                state.currentOrder = action.payload
            })
            .addCase(updateOrderAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateOrderAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.orders.find(item => item.id === action.payload.id)
                state.orders.splice(index, 1, action.payload);
            })
    },
});


export const { resetOrder } = ordersSlice.actions

export const selectCurrentOrder = (state) => state.orders.currentOrder

export default ordersSlice.reducer;
