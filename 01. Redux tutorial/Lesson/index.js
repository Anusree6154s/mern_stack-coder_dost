//with initial values for both account and bonus

import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//action by name: to reduce errors
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";

// action creators
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(incrementByAmount(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}
function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(amount) {
  return { type: incByAmount, payload: amount };
}

//amountReducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };

    case inc:
      //immmutable state: state read-ony
      return { amount: state.amount + 1 };

    case dec:
      return { amount: state.amount - 1 };

    case incByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

//bonusReducer
function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case init:
      return { points: action.payload };

      
    case inc:
      //immmutable state: state read-ony
      return { points: state.points + 1 };

    case dec:
      return { points: state.points - 1 };

    case incByAmount:
      if (action.payload >= 100) return { points: state.points + 1 };

    default:
      return state;
  }
}

//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default),
);
const history = [];

//dispatch without action once
setTimeout(() => {
  store.dispatch(getUser(2));
}, 5000);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});
