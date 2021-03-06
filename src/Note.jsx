import React from 'react'
import DeleteOutlineIcon from "@material-ui/icons/Delete"
const Note=(props)=>{
    const deletenote=()=>{
        props.deleteItem(props.id)
    }
    return (
        <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button onClick={deletenote}>
                <DeleteOutlineIcon  className="deleteIcon"/>
            </button>
        </div>
        </>
    )
}

export default Note