import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {LoginUser, createUser, signOut, updateUser, checkAuth } from './authAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null,
  userAuthenticated:false
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const LoginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (loginInfo) => {
    const response = await LoginUser(loginInfo);
    return response.data;
  }
);

export const checkAuthAsync = createAsyncThunk(
  'user/checkAuth',
  async () => {
    const response = await checkAuth();
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const signOutsAsync = createAsyncThunk(
  'user/signOut',
  async () => {
    const response = await signOut();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(LoginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(LoginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(LoginUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(checkAuthAsync.pending, (state, action) => {
        state.status = 'loading';
        state.userAuthenticated=false;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        state.userAuthenticated=true;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.userAuthenticated=true;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload
      })
      
      .addCase(signOutsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutsAsync.fulfilled, (state,) => {
        state.status = 'idle';
        state.loggedInUser = null
      })
  },
});


export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userAuthenticated;


export default authSlice.reducer;
