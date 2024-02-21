//we can avoid creating action creaters using redux toolkit

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 0
}

export const getUserId = createAsyncThunk('account/getUser', async (id) => {
    const { data } = await axios.get(` http://localhost:3000/accounts/${id}`)
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
        },
        decrementByAmount: (state, action) => {
            if (state.amount >= action.payload) {
                state.amount -= action.payload
            }else{
                state.error='entered value larger than amount'
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserId.fulfilled, (state, action) => {
            state.amount = action.payload
            state.pending = false
        })
            .addCase(getUserId.pending, (state) => {
                state.pending = true
            })
            .addCase(getUserId.rejected, (state) => {
                state.error = true
            })
    }
})

//export each case of reducer (not extraReducers)
export const { increment, decrement, incrementByAmount, decrementByAmount} = accountSlice.actions

export default accountSlice.reducer