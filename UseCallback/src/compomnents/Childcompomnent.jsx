import React from 'react'

const Childcompomnent = React.memo((props) => {
  console.log("child component go re-render again");
  
  return (
    <div>
      <button onClick={props.handleclick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default Childcompomnent