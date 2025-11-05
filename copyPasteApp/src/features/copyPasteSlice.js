import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState = {
  pastes:localStorage.getItem("pastes")?
  JSON.parse(localStorage.getItem("pastes")):[]
}

export const copyPasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
        const paste=action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Created Sucessfully");
    },
    updateToPaste: (state,action) => {
          const paste=action.payload;
          const index=state.pastes.findIndex((item)=>item._id===paste._id);
          if(index>=0){
            state.pastes[index]=paste;
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
            toast.success("Updated Sucessfully");
          }
    },
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");

    },
    removeFromPastes:(state,action)=>{
      const pasteId=action.payload;
      console.log(pasteId);
       const index=state.pastes.findIndex((item)=>item._id===pasteId);
       console.log(index);
       if(index>=0){
        state.pastes.splice(index,1);  // to remove specifically using index
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Deleted sucessfully");
       }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPastes,removeFromPastes } = copyPasteSlice.actions

export default copyPasteSlice.reducer