import React, { useEffect } from "react";
import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItemsByUserIdAsync,
  selectItems,
} from "./features/cart/cartSlice";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchLoggedInUserAsync());
    }
  }, [user]);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);

  return (
    <div className="App">
      {userChecked
        ? <RouterProvider router={router} />
        : <div className="loader"></div>
      }

    </div>
  );
}

export default App;
