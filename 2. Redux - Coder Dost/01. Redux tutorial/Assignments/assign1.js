// Async type of call from a new reducer to any online API like JSON Placeholder Posts.
// Also show proper loading messages in console. Like - loading posts..., posts loaded , posts fetching failed.
// Also add those posts to a state of reducer in a sorted manner (sort by title)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action by name: to reduce errors
const getPostsF = 'getPostsFulfilled'
const getPostsR = 'getPostsRejected'
const getPostsP = 'getPostsPending'

// action creators
function getPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch(getPostsPending())
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      const sortedTitles = data.map((post) => post.title).sort((a, b) => a.localeCompare(b));
      dispatch(getPostsFulfilled(sortedTitles));
  } catch (error) {
      dispatch(getPostsRejected(error.message))
    }
  }
}
function getPostsFulfilled(titles) {
  return { type: getPostsF, titles }
}
function getPostsRejected(error) {
  return { type: getPostsR, error }
}
function getPostsPending() {
  return { type: getPostsP }
}

//reducer
function reducer(state = {}, action) {
  switch (action.type) {
    case getPostsF:
      return { ...state, message: 'posts loaded', titles: action.titles}

    case getPostsR:
      return { ...state, error: action.error, message: 'posts fetching failed' }

    case getPostsP:
      return { ...state, message: 'loading posts' }

    default:
      return state
  }
}

//store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));
const history = []

// Dispatch without action once
setTimeout(async () => {
  await store.dispatch(getPosts());
}, 5000);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});