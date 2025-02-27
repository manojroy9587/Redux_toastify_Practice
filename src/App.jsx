import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/CounterSlice";
import { ToastContainer } from "react-toastify";
import { updateTime } from "./features/timeSlice";


function App() {
  const count = useSelector((state) => state.counter.count);
  const time = useSelector((state) => state.time.time);
  const dispatch = useDispatch();

    // Auto-update time every second
    useEffect(() => {
      const timer = setInterval(() => {
        dispatch(updateTime());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
       <ToastContainer />
       <p className="text-lg text-blue-900 font-semibold my-10">Now: {time}</p>

      <h1 className="text-3xl font-bold mb-4">Redux Toolkit Counter</h1>
      <p className="text-2xl">{count}</p>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
     
    </div>
  );
}

export default App;
