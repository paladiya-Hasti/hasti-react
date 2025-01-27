// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

// const View = () => {

//   const {id }= useParams()

//   const allPastes= useSelector((state)=> state.paste.pastes)

//   const paste=allPastes.filter((p)=>p._id === id )
//   console.log("final",paste);
  
//   return (
// <div className="p-6">
//   {/* <div className="flex flex-col gap-6 md:flex-row md:gap-7 items-start md:items-center justify-between"> */}
    
//     <div className="w-full md:w-[66%]">
//       <input
//         type="text"
//         className="p-2 rounded-2xl border w-full focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter the title"
//         value={paste.title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//     </div>

//     <div className="w-full md:w-[66%] mt-4 md:mt-0">
//       <textarea
//         value={paste.value}
//         className="rounded-2xl p-4 border w-full focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter content here"
//         onChange={(e) => setValue(e.target.value)}
//         rows={20}
//       />
//     </div>
//   </div>
// </div>
//   )
// }

// export default View

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const View = () => {
  const { id } = useParams()  // Retrieve the paste ID from the URL
  const allPastes = useSelector((state) => state.paste.pastes)  // Get all pastes from the Redux store
  
  // Find the paste by ID using .find() to get the first match (or undefined)
  const paste = allPastes.find((p) => p._id === id)
  
  // If paste is not found, show a "not found" message
  if (!paste) {
    return <div className="text-center">Paste not found</div>
  }
  
  // No need for setTitle/setValue if you're not editing the content
  const [title, setTitle] = useState(paste.title)
  const [value, setValue] = useState(paste.content)

  useEffect(() => {
    setTitle(paste.title)
    setValue(paste.content)
  }, [paste])  // Re-run the effect when the paste changes

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6 md:flex-row md:gap-7 items-start md:items-center justify-between">
        <div className="w-full md:w-[66%]">
          <input
            type="text"
            className="p-2 rounded-2xl border w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}  // You can enable this if you plan to make the title editable
            disabled  // Disables the input as it's just for viewing
          />
        </div>

        <div className="w-full md:w-[66%] mt-4 md:mt-0">
          <textarea
            value={value}
            className="rounded-2xl p-4 border w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Enter content here"
            onChange={(e) => setValue(e.target.value)}  // You can enable this if you plan to make the content editable
            rows={20}
            disabled  // Disables the textarea as it's just for viewing
          />
        </div>
      </div>
    </div>
  )
}

export default View
