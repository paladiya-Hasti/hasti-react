import { useCallback, useState } from 'react'

import './App.css'
import Childcompomnent from './compomnents/Childcompomnent'
import ExpensiveComponents from './compomnents/ExpensiveComponents'

function App() {
  const [count, setCount] = useState(0)
 const handleclick=useCallback(()=>{
  setCount((count) => count + 1)
 },[count])
 
  return (
    <>
      <div>
        <ExpensiveComponents/>
      <div>
        count:{count}
      </div>
    
        <button onClick={handleclick}>
          increment
        </button>
       <div>
        <Childcompomnent handleclick={handleclick} buttonName="click me"/>
       </div>
     
      </div>
      
    </>
  )
}

export default App
