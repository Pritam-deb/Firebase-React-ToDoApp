import "./App.css";
import TextField from "@material-ui/core/TextField";
import {
  useState,
  useEffect
} from "react";
import {
  Button
} from "@material-ui/core";
import {
  db
} from "./firebase_config";
import firebase from "firebase/app";
import TodoListItem from "./Todo.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }


  return (

    <div className = "App" >
    <div style = {
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }
    } >
    <h1 > Your To - Do list </h1> 
    <form >
    <TextField id = "standard-basic"
    label = "Write your Task"
    value = {
      todoInput
    }
    style = {
      {
        width: "80vw",
        maxWidth: "450px"
      }
    }
    onChange = {
      (e) => setTodoInput(e.target.value)
    }
    /> 
    <Button type = "submit"
    variant = "contained"
    onClick = {
      addTodo
    }
    style = {
      {
        display: "none"
      }
    } >
    Default </Button> 
    </form>

    <div style = {
      {
        width: "80vw",
        maxWidth: "450px",
      }
    } > {
      todos.map((todo) => ( <
        TodoListItem todo = {
          todo.todo
        }
        inprogress = {
          todo.inprogress
        }
        id = {
          todo.id
        }
        />
      ))
    } 
    </div> 
    </div> 
    </div>
  );
}

export default App;