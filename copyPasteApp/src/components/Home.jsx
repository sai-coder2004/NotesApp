import React, { useEffect, useEffectEvent } from 'react'
import { useState } from 'react';
import "./Home.css"
import { useSearchParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { addToPaste, updateToPaste } from '../features/copyPasteSlice';
const Home = () => {
    const[text,setText]=useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const[enterText,setEnterText]=useState('');
    const pasteId=searchParams.get("pasteId");
    const dispatch= useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes);
    const date = new Date();
    const formatted = date.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric"
});
    function createPaste(){
      const paste={
        title:text,
        content:enterText,
        _id:pasteId||Date.now().toString(36),
        createdAt:formatted.toString(),
      }

      if(pasteId){
        //update
        dispatch(updateToPaste(paste));
      }
      else{
        //new paste
        dispatch(addToPaste(paste));
      }
      //after creation or updation
      setText('');
      setEnterText('');
      setSearchParams({});
    }
    useEffect(()=>{
        if(pasteId){
          const paste=allPastes.find((p)=>p._id===pasteId);
          setText(paste.title);
          setEnterText(paste.content);
        }
    },[pasteId])
  return (
    <div className='home-div'>
      <input type="text" placeholder='Enter your title here' id="input"
      value={text}
      onChange={(e)=>setText(e.target.value) }
       />
       <button id="btn" onClick={createPaste}>
        {
        pasteId ? "Upadte" : "Create"
       }
       </button>

        <textarea type="text" placeholder='Enter Your text here' id="text-input"
          value={enterText}
          onChange={(e)=>setEnterText(e.target.value)}
        />
    </div>
  )
}

export default Home
