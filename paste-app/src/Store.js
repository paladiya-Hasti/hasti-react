// import { configureStore } from "@reduxjs/toolkit";
// import { pasteSlice } from "./assets/redux/PasteSlice";

// const store=configureStore({
//   reducer:{
//     paste:pasteSlice
//   }
// })
// export default store

import { configureStore } from "@reduxjs/toolkit";
import { pasteSlice } from "./assets/redux/PasteSlice";

const store = configureStore({
  reducer: {
    paste: pasteSlice.reducer, // Add your slice reducer here
  },
});

export default store;
