import React from 'react'

const Note = (props) => {
    const deleteEvent =()=>{
        props.deleteItem(props.id)
    }
  return (
    <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button className='deleteIcon' onClick={deleteEvent}>-</button>
        </div>
    </>
  )
}

export default Note;