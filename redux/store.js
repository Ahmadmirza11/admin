// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authslice'
import firmReducer from "./firmslice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    firms: firmReducer,
  },
});
