// import { configureStore
//  } from "@reduxjs/toolkit";
// import { CounterSlice } from "../Features/Counter/CounterSlice";

//  const store=configureStore({
//   reducer:{
//     counter:CounterSlice
//   },
//  })

//  export default store

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/CounterSlice.jsx'; // सही path दें

const store = configureStore({
  reducer: {
    counter: counterReducer, // Reducer को यहाँ add करें
  },
});

export default store;
