import React, {useState, useEffect } from "react";
import "./App.css";
import ReactForm from "./components/ReactForm";
import ControlledForm from "./components/ControledForm";
import FormikForm from "./components/FormikForm";




function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const item = await response.json()
        setTodo(item)
      }
      catch(err) {
        console.log(err.message)
      }
    })()  

  }, [])

  return (
    <div className='App'>
      {todo ? todo.title : ''}
      <ReactForm />
      <br />
      <hr />
      <ControlledForm />

      <hr/>
      <FormikForm/>
    </div>
  );
}
export default App;
