//Studying different action types and action payloads and if-else conditions on reducers

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


//initialise store states
const initialState = { amount: 0 }

//initialise reducer with conditiions
function reducer(state = initialState, action) {
    if (action.type === 'increment') {
        return { amount: state.amount + 1 }
        //state is immutable(unchangable), ∴ we need to make a new object and store the new value
    }
    if (action.type === 'incrementByAmount') {
        //conditon on reducer
        if(action.payload>50){
            return { amount: state.amount + action.payload }
        }
    }
    if (action.type === 'decrement') {
        return { amount: state.amount - 1 }
    }
    return state
}

//initialise store
const store = createStore(reducer, applyMiddleware(logger.default));

//to do action
//to increment value after every 2 sec
setInterval(() => {
    store.dispatch({ type: 'incrementByAmount', payload:100 })
}, 2000)
