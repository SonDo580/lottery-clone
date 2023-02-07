import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./playSlice";

export const store = configureStore({
  reducer: {
    play: playReducer,
  },
});
