import React from 'react'
import "./view-paste.css"
import { useParams, useSearchParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

const ViewPastes = () => {
  const pasteId=useParams();
  console.log(pasteId.id);
  const dispatch= useDispatch();
  const allPastes=useSelector((state)=>state.paste.pastes);
  const paste=allPastes.find((p)=>p._id===pasteId.id);
  console.log(paste);
  return (
    <div className='view-paste'>
      <div className='ind'>
        Title : {paste.title}
      </div>
      <div className='ind'>
        Date :  {paste.createdAt}
      </div>
      <div className='ind'>
        content : {paste.content}
      </div>
      
      
      

    </div>
  )
}

export default ViewPastes
