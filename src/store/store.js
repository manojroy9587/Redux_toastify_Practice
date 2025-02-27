import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import timeReducer from "../features/timeSlice"; // Import time slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    time: timeReducer, // Add time slice to store

  },
});
