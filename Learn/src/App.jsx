import React, { createContext, useState } from "react";
import ChildA from "./comoponets/ChildA";

import './App.css'
  const UserContext = createContext();

const ThemeContext= createContext()
const App = () => {
  const [user,setUser]= useState({name:"hasti paladiya"})

  const [theme,setTheme]=useState('light')
  return (
    <div>
      <UserContext.Provider value={user}><ThemeContext.Provider value={{theme,setTheme}}>

<div className="child1" style={{backgroundColor:theme === 'light' ?"beige" :"black"}}>
<ChildA/>
</div>
</ThemeContext.Provider>
</UserContext.Provider>

      
    </div>
  );
};

export default App;
export {UserContext}

export {ThemeContext}