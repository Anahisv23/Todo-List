import tasks from "./TasksData";
import React, { useState, useEffect } from "react";

function App() {
  const [tasksArr, setTasksArr] = useState([]);
  const [input, setInput] = useState("")
 

  const handleChange = (e) => {
    if(e.target.name === "input"){
      setInput(e.target.value)
    }
  }


  const handleAdd = (e) => {
    e.preventDefault()
    let taskNumber = tasksArr.length + 1
    let taskToAdd = {"id": taskNumber, "task": input, "complete": false }
    setTasksArr((prev) => 
      [...prev, taskToAdd]
    )
    setInput("")
  }

  // const handleComplete = 
  return (
    <div className="App">
      <h1 style={{ textAlign: "center"}}>Your To Do List</h1>
      <form>
      <label>
        <input type="text" placeholder="enter a new task here" name="input" onChange={handleChange} value={input}/>
      </label>
      <button onClick={handleAdd}>Add Task</button>
    </form>
    <h3 style={{ textAlign: "center"}}>To Do's</h3>
      {tasksArr.map((currTask) => {
        return (
          <ul style={{ textAlign: "center"}}>
            <li>{currTask.id}. {currTask.task}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
