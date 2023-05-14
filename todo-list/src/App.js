import React, { useEffect, useState } from "react";

function App() {
  const [tasksArr, setTasksArr] = useState([]);
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // let timeLimit = 30 * 60 * 1000

  // clear local storage tasks in 30 minutes
  // setTimeout(function() {
  //   localStorage.removeItem("tasks")
  // }, timeLimit)

  // useEffect sets local storage data to tasksArr local state if we have data in local storage 
  // if we do not have data we setTasksArr to an empty arr 

  // useEffect(() => {
  //   const storedArray = JSON.parse(localStorage.getItem('tasks'));
  //   if (storedArray) {
  //     setTasksArr(storedArray);
  //   } else {
  //     setTasksArr([])
  //   }
  // }, []);

  const handleChange = (e) => {
    if (e.target.name === "input") {
      setInput(e.target.value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let taskNumber = tasksArr.length + 1;
    let taskToAdd = { id: taskNumber, task: input, complete: false };
    setTasksArr((prev) => [...prev, taskToAdd]);
    sessionStorage.setItem("tasks", JSON.stringify([...tasksArr, taskToAdd]))
    setInput("");
  };

  const handleComplete = (e) => {
    tasksArr.map((currTask) => {
      if (currTask.task === e.target.name) {
            currTask.complete = !currTask.complete;
            setIsChecked(!isChecked);
          }
          return currTask;
    })
    // update the local state array
    setTasksArr(tasksArr)
    // update session storage data
    sessionStorage.setItem("tasks", JSON.stringify([tasksArr]))
  }

  
  return (
    <div className="toDo">
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <div className="form-container">
      <form className="centered-form">
        <label>
          <input
            type="text"
            placeholder="enter a new task here"
            name="input"
            onChange={handleChange}
            value={input}
            />
        </label>
        <button onClick={handleAdd}>Add Task</button>
      </form>
      </div>
      <h3 style={{ textAlign: "center" }}>Tasks</h3>
      <hr></hr>
      {tasksArr.map((currTask) => {
        return (
          <ul key={currTask.id}>
            {currTask.complete === true ? (
              <input
                type="checkbox"
                checked={true}
                name={currTask.task}
                onChange={handleComplete}
              />
            ) : (
              <input
                type="checkbox"
                checked={false}
                name={currTask.task}
                onChange={handleComplete}
              />
            )}
            <li>
              {currTask.task} {currTask.complete}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
