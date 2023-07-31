 import React, { useState } from 'react'
 
 const CreateNote = (props) => {
    const [note,setNote] = useState({
        title: '',
        content : ''
    })

 const addEvent = () =>{
    props.passNote(note);
    setNote({
        title :'',
        content : ''
    })
 }   

     const eventInput = (e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setNote((pre)=>{
            return{
                ...pre,
                [name] : value
            } 
        })
     } 

   return (
     <>
        <div className='main_note'>
            <form>
                <input type='text' name='title' placeholder='Title' onChange={eventInput} value={note.title}/>
                <textarea placeholder='Write a note...' name='content' onChange={eventInput} value={note.content}/>
                <input type='button' className='' value='+' onClick={addEvent}/>
            </form>
        </div>
     </>
   )
 }
 
 export default CreateNote