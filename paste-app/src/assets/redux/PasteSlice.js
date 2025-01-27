import { createSlice } from "@reduxjs/toolkit"

const initialState= {
  pastes:localStorage.getItem("pastes")
  ?JSON.parse(localStorage.getItem("pastes")):[]
}

export const pasteSlice= createSlice({
  name:"paste",
  initialState,
  reducers:{
    addToPaste:(state,action)=>{
      const paste=action.payload;
      state.pastes.push(paste)
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      alert("successfully")
    },
    updateToPaste:(state,action)=>{
      const paste=action.payload;
        const index = state.pastes.findIndex((item)=>item._id === paste._id)
          if(index >= 0){
            state.pastes(index)=paste
            localStorage.setItem("pastes",JSON.stringify(state.pastes))
            alert("paste updated")
          }
        
      
    },
    resetAllPaste:(state,action)=>{
      state.pastes=[]
      localStorage.removeItem("pastes")
    },
    removeTOpaste:(state,action)=>{
      const pasteID=action.payload;
      console.log(pasteID);
      
        const index = state.pastes.findIndex((item)=>item._id === pasteID)
          if(index >= 0){
            state.pastes.splice(index, 1);
            localStorage.setItem("pastes",JSON.stringify(state.pastes))
            alert("paste deleted")
          }
         
    }
  }
})

export const {addToPaste,updateToPaste, resetAllPaste,removeTOpaste}=pasteSlice.actions

export default pasteSlice.reducer