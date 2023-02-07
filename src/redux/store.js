import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./play/playSlice";

export const store = configureStore({
  reducer: {
    play: playReducer,
  },
});
