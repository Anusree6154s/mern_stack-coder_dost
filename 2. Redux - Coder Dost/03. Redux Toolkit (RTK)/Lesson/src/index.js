import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice';
import rewardReducer from './reducers/reward';
import { Provider } from "react-redux";


const store = configureStore({
  reducer:{
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer
}
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </StrictMode>
);
