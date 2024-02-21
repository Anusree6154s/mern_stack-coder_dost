//All init cases (Pending, Fulfilled, Rejected) in call API by id

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action name constatnts
//to reduce typos while using them further in code
const initPending = 'getAccount/pending'
const initFulfilled = 'getAccount/fulfilled'
const initRejected = 'getAccount/rejected'
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'
const decByAmt = 'decrementByAmount'

//action creators
//to minimise writing within dispatch
function initialise(id) {
    return async (dispatch) => {
        try {
            dispatch(initAccountPending())
            const res = await axios.get(`http://localhost:3000/account/${id}`)
            console.log(res.data.amount)
            dispatch(initAccountFulfilled(res.data.amount))
        } catch (error) {
            dispatch(initAccountRejected(error.message))
        }
    }
}
function initAccountPending() {
    return { type: initPending, pending: true }
}
function initAccountFulfilled(value) {
    return { type: initFulfilled, payload: value }
}
function initAccountRejected(value) {
    return { type: initRejected, error: value }
}
function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount() {
    return { type: incByAmt, payload: 20 }
}
function decrementByAmount(value) {
    return { type: decByAmt, payload: value }
}

//initialise store states
const initialState = { amount: 0 }

//initialise reducer with conditiions
function reducer(state = initialState, action) {
    switch (action.type) {
        case initPending:
            return { ...state, pending: action.pending }
        case initFulfilled:
            return { amount: state.amount + action.payload }
        case initRejected:
            return { amount:state.amount, error: action.error }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmt:
            return { amount: state.amount + action.payload }
        case decByAmt:
            return { amount: state.amount - action.payload }
        default:
            return state;
    }
}

//initialise store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

//to do action
//we call async functions without parenthesis
store.dispatch(initialise(1))

//an interval of 2 sec to experiment if teh '...state' or 'amount:state.amount' is necessary in reducers initRejected. 
//result is -> it is necessary. else it prints next state as {amount:NaN}
setTimeout(()=>{
    store.dispatch(increment())
}, 1000);
