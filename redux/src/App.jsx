import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './Features/Counter/CounterSlice';
import './App.css'
const App = () => {
  const [amount,setAmount]=useState(0)
  const count = useSelector((state) => state.counter.value); // State access करें

  
  const dispatch = useDispatch();

  const handleincrement = () => {
    dispatch(increment());
  };

  const handledecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  const handleInclick = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className='container'>
      <button onClick={handleincrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handledecrement}>-</button>
      <br/>
      <br/>
      <button onClick={handleReset}>Reset</button>
      <br/>
      <br/>
      <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleInclick}>inc by Amount</button>

    </div>
  );
};

export default App;
