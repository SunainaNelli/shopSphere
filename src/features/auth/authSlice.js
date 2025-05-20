// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = JSON.parse(localStorage.getItem('user'));

const initialState = {
  isAuthenticated: !!userFromStorage,
  user: userFromStorage || null,
  role: userFromStorage?.role || 'user', // default is normal user
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { user, role } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.role = role;
      localStorage.setItem('user', JSON.stringify({ ...user, role }));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = 'user';
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
