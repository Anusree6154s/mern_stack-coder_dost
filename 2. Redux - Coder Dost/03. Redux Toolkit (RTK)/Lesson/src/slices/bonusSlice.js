import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    points: 0
}

//i think instead of importing action from account slice, this is made
const incrementByAmount = createAction('account/incrementByAmount')

//action name constants and reducers are made together
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1
        }
    },
    //connecting other slices to this slice or async functions have to be done using extraReducers
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action) => {
            if (action.payload >= 100) {
                state.points++
            }
        })
    }
})

//export each case of reducer 
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer