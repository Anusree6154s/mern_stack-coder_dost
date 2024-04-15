import React, { useEffect } from "react";
import "./styles/App.css";
import { Navigate, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync, } from "./features/cart/cartSlice";
import { checkAuthAsync, selectLoggedInUser, selectUserChecked, } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { fetchWishListByUserIdAsync } from "./features/wishList/wishListSlice";
import { router } from "./Routes";
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
    // dispatch(checkAuthAsync());
  }, []);
  console.log(userChecked)
  return (
    <div className="dark:bg-gray-900">
      {/* {userChecked? */}
       <RouterProvider router={router} />
        {/* : <div className='col-span-1 lg:col-span-3'><div className="loader"></div></div> */}
      {/* } */}

    </div>
  );
}

export default App;
