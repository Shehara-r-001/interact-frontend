import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  value: UDetails;
}

type UDetails = {
  email: string;
  role: string;
};

const initialState: UserState = {
  value: {
    email: '',
    role: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state: UserState, action: PayloadAction<UDetails>) => {
      state.value.email = action.payload.email;
      state.value.role = action.payload.role;
    },
    setLoggedOutUser: (state: UserState) => {
      state.value.email = '';
      state.value.role = '';
    },
  },
});

export const { setLoggedInUser, setLoggedOutUser } = userSlice.actions;

export default userSlice.reducer;
