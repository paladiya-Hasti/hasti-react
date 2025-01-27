// import { createSlice } from "@reduxjs/toolkit";

// export const CounterSlice= createSlice({
//   name:'counter',
//   initialState:{
//     value:0
//   },
//   reducers:{
//     increment: state=>{
//       state.value +=1
//     },
//     decrement: state=>{
//       state.value -=1
//     },
//     incrementByAmount: (state,action)=>{
//       state.value == action.payload
//     },
//   }
// })

// export const {increment,decrement,incrementByAmount}=CounterSlice.actions

// export default CounterSlice.reducer


import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 }, // Initial state सेट करें
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state,action)=>{
            state.value += Number(action.payload)
          },
  },
});

export const { increment, decrement ,reset,incrementByAmount} = counterSlice.actions; // Actions export करें
export default counterSlice.reducer; // Reducer export करें
