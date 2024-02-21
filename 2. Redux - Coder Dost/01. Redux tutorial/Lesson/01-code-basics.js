import { createStore } from 'redux';


//initialise store states
const initialState = { amount: 1 }

//initialise reducer with conditiions
function reducer(state = initialState, action){
    if(action.type ==='increment'){
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
    store.dispatch({ type:'increment' })
}, 1000)

//to view final global state
//subscribe method gets automatically called each time state changes in store
store.subscribe(() => {
    console.log(store.getState())
})
