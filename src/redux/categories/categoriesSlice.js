import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], status: 'Under construction' },
  checkStatus: (state) => ({
    ...state,
    status: 'Under construction',
  }),
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
