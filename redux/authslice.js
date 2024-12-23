import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null, // Add user to initial state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload; // Add action to set user
    },
  },
});

export const { setToken, setUser } = authSlice.actions; // Export the setUser action
export default authSlice.reducer;
 