import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import accountReducer from './reducers/account'
import { bonusReducer } from './reducers/bonus'
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';


import App from "./App";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
