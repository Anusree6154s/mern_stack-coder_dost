//action reducers using redux toolkit
//either reducers or slices. both arent required

import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')
const initialState = {
    points: 15
}
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