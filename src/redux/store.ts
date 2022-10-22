import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './dropdownSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    role: dropdownReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
