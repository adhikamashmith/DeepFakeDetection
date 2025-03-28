import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  isLoading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { toggleDarkMode, setLoading, setError } = appSlice.actions;
export default appSlice.reducer;