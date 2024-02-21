//we can avoid creating action creaters using redux toolkit

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 0
}

export const getUserId = createAsyncThunk('account/getUser', async (id) => {
    const {data} = await axios.get(` http://localhost:3000/accounts/${id}`)
    return data.amount
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserId.fulfilled, (state, action) => {
            state.amount = action.payload
            state.pending=false
        })
        .addCase(getUserId.pending, (state)=>{
            state.pending=true
        })
        .addCase(getUserId.rejected, (state)=>{
            state.error=true
        })
    }
})

//export each case of reducer i.e, actions (intead of actions folder)
export const { increment, decrement, incrementByAmount } = accountSlice.actions

//export accountslice as a reducer (intead of reducers folder)
export default accountSlice.reducer