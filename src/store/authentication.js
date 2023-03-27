import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isLoggedIn: false, username: null };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
