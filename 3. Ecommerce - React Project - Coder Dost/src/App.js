import React, { useEffect } from 'react';
import './styles/App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync, selectItems } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchLoggedInUserAsync } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [user])
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
