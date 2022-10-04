import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DropdownState {
  value: string;
}

const initialState: DropdownState = {
  value: '',
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setRole: (state: DropdownState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRole } = dropdownSlice.actions;

export default dropdownSlice.reducer;
