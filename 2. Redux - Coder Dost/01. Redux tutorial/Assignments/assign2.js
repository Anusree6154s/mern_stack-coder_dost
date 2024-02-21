//index 2 re-written using immer in accountReducer and bonusReducer

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import produce from 'immer';

/****************Actions**************/
// Action types
const init = 'init';
const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';
const getUserAccFulfilled = 'getUserAccFulfilled';
const getUserAccRejected = 'getUserAccRejected';
const getUserAccPending = 'getUserAccPending';

// Action creators
function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
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

function getUserAccountFulfilled(value) {
  return { type: getUserAccFulfilled, payload: value };
}

function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error };
}

function getUserAccountPending() {
  return { type: getUserAccPending };
}

/************Reducers**************/
// Account reducer using immer
function accountReducer(state = { amount: 1 }, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case getUserAccFulfilled:
        draftState.amount = action.payload;
        draftState.pending = false;
        break;

      case getUserAccRejected:
        draftState.error = action.error;
        draftState.pending = false;
        break;

      case getUserAccPending:
        draftState.pending = true;
        break;

      case inc:
        draftState.amount += 1;
        break;

      case dec:
        draftState.amount -= 1;
        break;

      case incByAmount:
        draftState.amount += action.payload;
        break;

      default:
        // No changes
        break;
    }
  });
}

// Bonus reducer using immer
function bonusReducer(state = { points: 1 }, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case init:
        draftState.points = action.payload;
        break;

      case inc:
        draftState.points += 1;
        break;

      case dec:
        draftState.points -= 1;
        break;

      case incByAmount:
        if (action.payload >= 100) {
          draftState.points += 1;
        }
        break;

      default:
        // No changes
        break;
    }
  });
}

// Store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default));
const history = [];

// Dispatch without action once
setTimeout(async () => {
  await store.dispatch(getUser(2));
}, 5000);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});
