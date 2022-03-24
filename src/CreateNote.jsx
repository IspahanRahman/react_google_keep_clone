import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
const CreateNote=(props)=>{
    const year=new Date().getFullYear()
    const [note,setNote]=useState({
      title:"",
      content:""
    })

    const InputEvent=(event)=>{
      const {name,value}=event.target
      setNote((prevData)=>{
        return {
          ...prevData,
          [name]:value,

        }
      })
      console.log(note)
    }

    const addEvent=()=>{
      props.passNote(note)
      setNote({
        title:"",
        content:""
      })
    }
  return (
    <>
       <div className="main_note">
           <form>
               <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
               <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write Note"></textarea>
               <Button onClick={addEvent}><AddIcon/></Button>
           </form>
       </div>
    </>
  )
}

export default CreateNote;