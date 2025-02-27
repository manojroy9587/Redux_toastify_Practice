import { createSlice } from "@reduxjs/toolkit";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  
  const initialState = {
    count: 0,
  };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      toast.success(`🎉 Add 1 ,Count is now ${state.count}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
 

    },
    decrement: (state) => {
      state.count -= 1;
      
      toast.success(`🎉 Subscract 1 ,Count is now ${state.count}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });


    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
      
      toast.success(`🎉  multiple 5!, Count is now ${state.count}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
   

    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
