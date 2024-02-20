//Action creators and action name constants:

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//action name constatnts
//to reduce typos while using them further in code
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'
const decByAmt = 'decrementByAmount'

//action creators
//to minimise writing within dispatch
function increment(){
    return {type:inc}
}
function decrement(){
    return {type:dec}
}
function incrementByAmount(value){
    return {type:incByAmt, payload:value}
}
function decrementByAmount(value){
    return {type:decByAmt, payload:value}
}

//initialise store states
const initialState = { amount: 0 }

//initialise reducer with conditiions
function reducer(state = initialState, action) {
    switch (action.type) {
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
const store = createStore(reducer, applyMiddleware(logger.default));

//to do action
//to increment value after every 2 sec
setInterval(() => {
    store.dispatch(decrementByAmount(50))
}, 2000)
