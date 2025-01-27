// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { addToPaste, updateToPaste } from "../assets/redux/PasteSlice";

// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [value, setValue] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();

//   const pasteID = searchParams.get("pasteId");
//   const dispatch = useDispatch();
//   const allPastes = useSelector((state) => state.paste.pastes);

//   useEffect(() => {
//     if (pasteID) {
//       const paste = allPastes.find((p) => p._id === pasteID);
//       if (paste) {
//         setTitle(paste.title);
//         setValue(paste.content);
//       }
//     }
//   }, [pasteID, allPastes]);

//   const createPaste = () => {
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteID || Date.now().toString(36),
//       createAt: new Date().toISOString(),
//     };

//     if (pasteID) {
//       dispatch(updateToPaste(paste));
//       setSearchParams({}); // Clear the pasteId from the URL after updating
//     } else {
//       dispatch(addToPaste(paste));
//       setSearchParams({ pasteId: paste._id }); // Set pasteId in the URL when a new paste is created
//     }

//     // Clear inputs after dispatching
//     setTitle("");
//     setValue("");
//   };

//   return (
//     <div className="flex flex-row gap-7 place-context-between">
//       <div>
//         <input
//           type="text"
//           className="p-1 rounded-2xl border w-[66%]"
//           placeholder="Enter the title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button
//           onClick={createPaste}
//           className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600"
//         >
//           {pasteID ? "Update My Paste" : "Create My Paste"}
//         </button>
//         <div className="mt-8">
//           <textarea
//             value={value}
//             className="rounded-2xl mt-4 min-w-[500px] p-4"
//             placeholder="Enter content here"
//             onChange={(e) => setValue(e.target.value)}
//             rows={20}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../assets/redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteID = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteID) {
      const paste = allPastes.find((p) => p._id === pasteID);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteID, allPastes]);

  const createPaste = () => {
    console.log("Create Paste function triggered!");
    const paste = {
      title: title,
      content: value,
      _id: pasteID || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    if (pasteID) {
      console.log("Updating paste with ID:", pasteID);
      dispatch(updateToPaste(paste));
      setSearchParams({}); // Clear pasteId from URL after updating
    } else {
      console.log("Creating new paste.");
      dispatch(addToPaste(paste));
      setSearchParams({ pasteId: paste._id }); // Set pasteId in the URL when creating
    }

    // Clear the inputs
    setTitle("");
    setValue("");
  };

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-7 justify-between items-start p-6">
    <div className="flex flex-col gap-4 w-full md:w-[66%]">
      <input
        type="text"
        className="p-2 rounded-2xl border w-full focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      
    
      <button
        onClick={() => {
          console.log("Button clicked!");
          createPaste();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {pasteID ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>
  
    <div className="w-full md:w-[66%] mt-4 md:mt-0">
      <textarea
        value={value}
        className="w-full rounded-2xl p-4 border focus:ring-2 focus:ring-blue-500"
        placeholder="Enter content here"
        onChange={(e) => setValue(e.target.value)}
        rows={10}
      />
    </div>
  </div>
  
  );
};

export default Home;
