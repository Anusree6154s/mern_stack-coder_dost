//multiple reducers 

//it is compulsorily required to set diff action creators, action namme constants and ∴ diff switch cases for all diff reducers individually

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action name constants for account
const initAccPending = 'account/getData/pending'
const initAccFulfilled = 'account/getData/fulfilled'
const initAccRejected = 'account/getData/rejected'
const incAmt = 'account/increment'
const decAmt = 'account/decrement'
const incByAmt = 'account/incrementByValue'
const decByAmt = 'account/decrementByValue'

//action name constants for bonus
const initBonPending = 'bonus/getData/pending'
const initBonFulfilled = 'bonus/getData/fulfilled'
const initBonRejected = 'bonus/getData/rejected'
const incPnt = 'bonus/increment'
const decPnt = 'bonus/decrement'
const incByPnt = 'bonus/incrementByValue'
const decByPnt = 'bonus/decrementByValue'

//action creators for accounts
//to minimise writing within dispatch
function initialiseAccount(id) {
    return async (dispatch) => {
        try {
            dispatch(getAccountPending())
            const res = await axios.get(`http://localhost:3000/accounts/${id}`)
            dispatch(getAccountFulfilled(res.data.amount))
        } catch (error) {
            dispatch(getAccountRejected(error.message))
        }

    }
}
function getAccountPending() {
    return { type: initAccPending, pending: true }
}
function getAccountFulfilled(value) {
    return { type: initAccFulfilled, payload: value }
}
function getAccountRejected(value) {
    return { type: initAccRejected, error: value }
}
function incrementAmount() {
    return { type: incAmt }

}
function decrementAmount() {
    return { type: decAmt }
}
function incrementByAmount() {
    return { type: incByAmt, payload: 20 }
}
function decrementByAmount(value) {
    return { type: decByAmt, payload: value }
}

//action creators for bonus
function initialiseBonus(id) {
    return async (dispatch) => {
        try {
            dispatch(getBonusPending())
            const res = await axios.get(`http://localhost:3000/bonus/${id}`)
            dispatch(getBonusFulfilled(res.data.points))
        } catch (error) {
            dispatch(getBonusRejected(error.message))
        }
    }
}
function getBonusPending() {
    return { type: initBonPending, pending: true }
}
function getBonusFulfilled(value) {
    return { type: initBonFulfilled, payload: value }
}
function getBonusRejected(value) {
    return { type: initBonRejected, error: value }
}
function incrementPoints() {
    return { type: incPnt }
}
function decrementPoints() {
    return { type: decPnt }
}
function incrementByPoints() {
    return { type: incByPnt, payload: 20 }
}
function decrementByPoints(value) {
    return { type: decByPnt, payload: value }
}


//initialise account reducer with conditiions
//reducer states must be initialised seperately in multiple reducers
function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case initAccPending:
            return { ...state, pending:action.pending}
        case initAccFulfilled:
            return { amount: state.amount + action.payload}
        case initAccRejected:
            return { amount:state.amount, error: action.error }
        case incAmt:
            return { amount: state.amount + 1 }
        case decAmt:
            return { amount: state.amount - 1 }
        case incByAmt:
            return { amount: state.amount + action.payload }
        case decByAmt:
            return { amount: state.amount - action.payload }
        default:
            return state;
    }
}

//initialise bonus reducer with conditiions
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case initBonPending:
            return { ...state, pending:action.pending}
        case initBonFulfilled:
            return { points: state.points + action.payload}
        case initBonRejected:
            return { points:state.points, error: action.error }
        case incPnt:
            return { points: state.points + 1 }
        case decPnt:
            return { points: state.points - 1 }
        case incByPnt:
            return { points: state.points + action.payload }
        case decByPnt:
            return { points: state.points - action.payload }
        default:
            return state;
    }
}

//initialise store
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default));

//to do action
store.dispatch(incrementAmount())
store.dispatch(initialiseBonus(1))
