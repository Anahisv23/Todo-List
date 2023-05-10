// import tasks from "./TasksData";
import React, { useState } from "react";

if (localStorage) {
  // LocalStorage is supported!
  console.log("LocalStorage is supported!")
} else {
  // No support. Use a fallback such as browser cookies or store on the server.
  console.log("LocalStorage is NOT supported!")
}

function App() {
  const [tasksArr, setTasksArr] = useState([]);
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    setInput("");
  };

  const handleComplete = (e) => {
    tasksArr.map((currTask) => {
      if (currTask.task === e.target.name) {
        currTask.complete = !currTask.complete;
        setIsChecked(!isChecked);
      }
      return currTask;
    });
    setTasksArr(tasksArr);
  };
 

  return (
    <div className="toDo">
      <h1 style={{ textAlign: "center" }}>Your To Do List</h1>
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
      <h3 style={{ textAlign: "center" }}>To Do's</h3>
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
