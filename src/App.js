import logo from './logo.svg';
import './App.css';
import '../src/component/google.css'
import Header from './component/Header';
import Footer from './component/Footer';
import CreateNote from './component/CreateNote';
import Note from './component/Note';
import { useState } from 'react';

function App() {
  const [add,setAdd] = useState([]);
  const addNote = (note) =>{
    setAdd((pre)=>{
      return [...pre,note];
    })
  }

  const onDelete =(id)=>{
    setAdd((olddata)=>
      olddata.filter((currdata,indx) => {
        return indx !== id;
      })
    );
  }; 
  return (
    <>
      <Header/>
      <Footer/>
      <CreateNote passNote = {addNote}/>
      {add.map((ele,i)=>{
        return (<Note
          key={i}
          id={i}
          title={ele.title}
          content={ele.content}
          deleteItem = {onDelete}
        />)
      })}
    </>
  );
}

export default App;
