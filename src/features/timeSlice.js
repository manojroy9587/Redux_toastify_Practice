import { createSlice } from "@reduxjs/toolkit";

const getISTTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());
};

const timeSlice = createSlice({
  name: "time",
  initialState: {
    time: getISTTime(),
  },
  reducers: {
    updateTime: (state) => {
      state.time = getISTTime();
    },
  },
});

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer;
