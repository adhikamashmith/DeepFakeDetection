import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice"; // ✅ Ensure this reducer exists

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
