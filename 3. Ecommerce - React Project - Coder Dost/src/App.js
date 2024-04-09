import React, { useEffect } from "react";
import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync, } from "./features/cart/cartSlice";
import { checkAuthAsync, selectLoggedInUser, selectUserChecked, } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { fetchWishListByUserIdAsync } from "./features/wishList/wishListSlice";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchWishListByUserIdAsync())
      dispatch(fetchLoggedInUserAsync());
    }
  }, [user]);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);

  return (
    <div className="dark:bg-gray-900">
      {userChecked
        ? <RouterProvider router={router} />
        : <LoginPage></LoginPage>
      }

    </div>
  );
}

export default App;
