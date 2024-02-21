//we can avoid creating action creaters using redux toolkit

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 0,
    array:[]
}

export const getUser = createAsyncThunk('account/getUser', async () => {
    const { data } = await axios.get(` http://localhost:3000/accounts`)
    return data
})
export const createUser = createAsyncThunk('account/createUser', async ({ name, amount }) => {
    const { data } = await axios.post(`http://localhost:3000/accounts`, { name, amount })
    return data
})
export const updateUser = createAsyncThunk('account/updateUser', async ({ id, name, amount }) => {
    const newData = { name, amount }
    const { data } = await axios.put(` http://localhost:3000/accounts/${id}`, newData)
    return data
})
export const deleteUser = createAsyncThunk('account/deleteUser', async (id) => {
    await axios.delete(` http://localhost:3000/accounts/${id}`)
    return id
})

//action name constants and reducers are made together
export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
        selectUser: (state, action) => {
            state.name=action.payload.name
            state.ID = action.payload.id
        }
    },
    //connecting other slices to this slice or async functions have to be done using extraReducers
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                if (action.meta.arg) {
                    const foundData = action.payload.find(item => item.id === action.meta.arg).amount
                    state.amount = foundData
                } else {
                    state.array = action.payload
                }
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.id = action.payload.id
                state.amount = action.payload.amount
                state.message= 'Deposit o2successful'
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.id = action.payload.id
                state.amount = action.payload.amount
                state.message = 'Updation successful'
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.id = action.payload
                state.message = 'Withdrawal successful'
            })
    }
})

//export each case of reducer (not extraReducers)
export const { increment, decrement, incrementByAmount, selectUser } = accountSlice.actions

export default accountSlice.reducer