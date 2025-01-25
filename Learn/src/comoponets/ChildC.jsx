import React, { useContext } from "react";

import { ThemeContext,UserContext } from "../App";
const ChildC = () => {
  const user =useContext(UserContext)

  const {theme,setTheme} = useContext(ThemeContext);

  function handleClick(){
if( theme === "light"){
  setTheme('dark')
}
else{
  setTheme('light')
}
  }
  return <div>
    
    data :{theme}
    <button onClick={handleClick}> Change Theme</button>
    data:{user.name}
    </div>;
};

export default ChildC;
