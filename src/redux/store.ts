import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './dropdownSlice';

export const store = configureStore({
  reducer: {
    role: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
