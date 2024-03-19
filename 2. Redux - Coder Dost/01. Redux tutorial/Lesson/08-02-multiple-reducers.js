//multiple reducers (case 2)


//case 2 - add a new property named suppose action 'name' in action object for account and bonus and use if-else conditions
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action name constants for account
const init = 'getReducer'
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'
const decByAmt = 'decrementByAmount'
const incByPnt = 'incrementByPoints'
const decByPnt = 'decrementByPoints'

//action creators for both
//to minimise writing within dispatch
function initialise(id, reducerName) {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3000/${reducerName}/${id}`)
        let key = (reducerName === 'account') ? 'amount' : 'points'
        dispatch({ type: init, payload: res.data[key], name: reducerName })
    }
}
function increment(reducerName) {
    return { name: reducerName, type: inc }
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

//initialise account reducer with conditiions
//both reducer states have to be initialised seperately
function accountReducer(state = {  amount: 0 }, action) {
   console.log(action.name)
        switch (action.type) {
            case init:
                return { name: action.name, amount: state.amount + action.payload }
            case inc:
                return { name: action.name, amount: state.amount + 1 }
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

//initialise bonus reducer
//both reducer states have to be initialised seperately
function bonusReducer(state = {  points: 0 }, action) {
   console.log(action.name)

        switch (action.type) {
            case init:
                return { name: action.name, points: state.points + action.payload }
            case inc:
                return { name: action.name, points: state.points + 1 }
            case dec:
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
store.dispatch(increment('bonus'))
store.dispatch(increment('account'))
store.dispatch(initialise(1, 'bonus'))