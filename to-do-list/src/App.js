import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState} from "react";
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase';



function App() {
  const [todoInput, setTodoInput] = useState('');

  //to upload it to database
  // function addTodo(e){
  //   
  //   e.preventDefault();
  //   console.log(`Trying to add todo`);
  // }

  const addTodo=(e)=>{
    e.preventDefault();    //prevent from reloading
    // console.log(`You are tryinng to add todo`);
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("")
  }
  //   
  

  return ( 
  <div className = "App"
    style = {
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    } >
    <h1 > Your To - Do list </h1> 
    <form>
    <TextField id = "standard-basic"
    label = "Write your Task" 
    value={todoInput}
    onChange={(e)=>setTodoInput(e.target.value)}
    />
    <Button type='submit' variant="contained" onClick={addTodo} style={{display:"none"}}>Default</Button>
    </form>
    </div>
  );
}

export default App;