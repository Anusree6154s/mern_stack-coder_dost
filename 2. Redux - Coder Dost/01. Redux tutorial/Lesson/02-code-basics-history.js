//Same code but outputting state history instead of state itself:

import { createStore } from 'redux';


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
const store = createStore(reducer);

//to do action
//to increment value after every 2 sec
setInterval(() => {
    store.dispatch({ type: 'increment' })
}, 2000)

//to view final global state
//subscribe method gets automatically called each time state changes in store
// Create an array to store state history
const history = []; 
store.subscribe(() => {
    history.push(store.getState())
    console.log(history);
})