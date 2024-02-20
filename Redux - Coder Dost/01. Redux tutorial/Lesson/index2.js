// with error handling and pending cases for accountReducer
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action by name: to reduce errors
const init = 'init'
const inc = 'increment'
const dec = 'decrement'
const incByAmount = 'incrementByAmount'
const getUserAccFulfilled = 'getUserAccFulfilled'
const getUserAccRejected = 'getUserAccRejected'
const getUserAccPending = 'getUserAccPending'


// action creators
function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending())
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
      dispatch(getUserAccountFufilled(data.amount))
    } catch (error) {
      dispatch(getUserAccountRejected(error.message))
    }

  }
}
function increment() {
  return { type: inc }
}
function decrement() {
  return { type: dec }
}
function incrementByAmount(amount) {
  return { type: incByAmount, payload: amount }
}
function getUserAccountFufilled(value) {
  return { type: getUserAccFulfilled, payload: value }
}
function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error }
}
function getUserAccountPending() {
  return { type: getUserAccPending }
}

//accountReducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getUserAccFulfilled:
      return { amount: action.payload, pending: false }

    case getUserAccRejected:
      return { ...state, error: action.error, pending: false }

    case getUserAccPending:
      return { ...state, pending: true }

    case inc:
      //immmutable state: state read-ony
      return { amount: state.amount + 1 }

    case dec:
      return { amount: state.amount - 1 }

    case incByAmount:
      return { amount: state.amount + action.payload }

    default:
      return state
  }
}

//bonusReducer
function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case init:
      return { points: action.payload }

    case inc:
      //immmutable state: state read-ony
      return { points: state.points + 1 }

    case dec:
      return { points: state.points - 1 }

    case incByAmount:
      if (action.payload >= 100)
        return { points: state.points + 1 }

    default:
      return state
  }
}

//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default));
const history = []

// Dispatch without action once
setTimeout(async () => {
  await store.dispatch(getUser(2));
}, 5000);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});