//action reducers using redux toolkit
//either reducers or slices. both arent required

import { createAction, createReducer } from '@reduxjs/toolkit'

//creates action without a seperate folder for actions
export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')
const initialState = {
    points: 15
}

//create reducers 
const rewardSlice = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.points++
        })
        .addCase(incrementByAmount, (state, action) => {
            state.points+=action.payload
        })
})

export default rewardSlice