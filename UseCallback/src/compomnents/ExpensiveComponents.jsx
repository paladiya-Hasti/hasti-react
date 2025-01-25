import React, { useCallback, useEffect, useRef, useState } from "react";

const ExpensiveComponents = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
const previousFunction=useRef(null);
  const Expensivecalculation=useCallback(()=>{
    console.log("Runing expensive calcuation....");
    let result=0;
    for(let i=0; i<1000000; i++){
      result += 1;
    
      return result;
    }
    
      },[count])

      useEffect(()=>{
      if(Expensivecalculation){
        if(previousFunction.current === Expensivecalculation){
          console.log("function not re-rending");
          
        }
        else{
          console.log("function got re-rending");
        }
      }
      else{
        previousFunction.current === Expensivecalculation
      }
      },[Expensivecalculation])
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <p >Expensive calculation result:{Expensivecalculation} </p>
      <button onClick={()=>setCount(count+1)}>increment count</button>
    </div>
  );
};

export default ExpensiveComponents;
