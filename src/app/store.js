import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import changeTheme from "../features/theme/theme.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: changeTheme,
  },
});
