// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {  removeTOpaste } from '../assets/redux/PasteSlice';

// const Paste = () => {

//   const pastes=useSelector((state)=>state.paste.pastes)
//   console.log(pastes);
//   const [searchTerm,setSearchTerm]=useState('');

//    const dispatch=useDispatch()

//    const  filterData=pastes.filter(
//     (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//    )

//    function handleDelete(pastID){
// dispatch(removeTOpaste(pastID))
//    }
    
  
//   return (
//     <div className='p-2 rounded-2xl min-w-[600px] mt-5'>
//       <input type="search" 
//       placeholder='search here'
//       value={searchTerm}
//       onChange={(e)=>setSearchTerm(e.target.value)}/>

//       <div className='flex flex-col gap-5'>
// {
//   filterData.length > 0 &&
//   filterData.map(
//     (paste)=>
//     {
//       return (
        
//         <div className="border rounded-lg p-4 mb-6" key={paste?._id}>
       
//         <div className="text-xl font-semibold mb-2">{paste.title}</div>
      
       
//         <div className="text-gray-700 mb-4">{paste.content}</div>
      
//        <div className="flex flex-row gap-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//             <a href={`/?pasteID=${paste?._id}`}>Edit</a>
//           </button>
      
    
//           <button 
//             onClick={() => handleDelete(paste?._id)} 
//             className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//           >
//             Delete
//           </button>
      
        
//           <button 
//             onClick={() => {
//               navigator.clipboard.writeText(paste?.content);
//               alert("Copied to clipboard!");
//             }} 
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Copy
//           </button>
      
        
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
//             Share
//           </button>
      
        
//           <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
//             <a href={`/pastes/${paste?._id}`}>View</a>
//           </button>
//         </div>
      
      
//         <div className="text-sm text-gray-500 mt-4">
//           {paste.createAt}
//         </div>
//       </div>
      
//       )
//     }
//   )
// }
//       </div>
//     </div>
//   )
// }

// export default Paste

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTOpaste } from '../assets/redux/PasteSlice'

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes)
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (pasteID) => {
    dispatch(removeTOpaste(pasteID))
  }

  const handleShare = (pasteID) => {
    const pasteURL = `${window.location.origin}/pastes/${pasteID}`; // Generate URL for the paste
    navigator.clipboard.writeText(pasteURL)
      .then(() => {
        alert("Paste URL copied to clipboard!");
      })
      .catch((error) => {
        alert("Failed to copy URL. Please try again.");
      });
  }

  return (
    <div className='p-2 rounded-2xl min-w-[600px] mt-5'>
      <input
        type="search"
        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-2xl border mb-4 w-full"
      />

      <div className='flex flex-col gap-5'>
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="border rounded-lg p-4 mb-6" key={paste?._id}>
                <div className="text-xl font-semibold mb-2">{paste.title}</div>
                <div className="text-gray-700 mb-4">{paste.content}</div>
                <div className="flex flex-row gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <a href={`/edit/${paste?._id}`}>Edit</a>
                  </button>

                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      alert("Copied to clipboard!");
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => handleShare(paste._id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Share
                  </button>

                  <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  {paste.createAt}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Paste
