//Using middleware - logger (first ‘npm install redux-logger’):

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


//initialise store states
const initialState = { amount: 1 }

//initialise reducer with conditiions
function reducer(state = initialState, action) {
    if (action.type === 'increment') {
        return { amount: state.amount + 1 }
        //state is immutable(unchangable), ∴ we need to make a new object and store the new value
    }
    return state
}

//initialise store
const store = createStore(reducer, applyMiddleware(logger.default));

//to do action
//to increment value after every 2 sec
setInterval(() => {
    store.dispatch({ type: 'increment' })
}, 2000)

//we dont need store.getState or store.subscribe when logger is there