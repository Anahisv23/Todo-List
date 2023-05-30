import React, { useState, useEffect } from "react";
// import Tasks from "./Tasks";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosAdd } from "react-icons/io";


const ToDoList = () => {
const [tasksArr, setTasksArr] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
const [input, setInput] = useState("");
const [isChecked, setIsChecked] = useState(false);

// useEffect sets local storage data to tasksArr local state if we have data in local storage 
// if we do not have data we setTasksArr to an empty arr 

useEffect(() => {
  const storedArray = JSON.parse(localStorage.getItem('tasks'));
  if (storedArray) {
    setTasksArr(storedArray);
  } else {
    setTasksArr([])
  }
}, []);

const handleRemove = () => {
  const newArr = tasksArr.filter((curr) => {
    return curr.complete === false
  })
  setTasksArr(newArr)
  localStorage.setItem("tasks", JSON.stringify(newArr))
}

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
  localStorage.setItem("tasks", JSON.stringify([...tasksArr, taskToAdd]))
  setInput("");
};

const handleComplete = (e) => {
  tasksArr.map((currTask) => {
    if (currTask.id === parseInt(e.target.name)) {
      currTask.complete = !currTask.complete;
      setIsChecked(!isChecked);
    }
    return currTask;
  })

  // update the local state array
  setTasksArr(tasksArr)
  // update session storage data
  localStorage.setItem("tasks", JSON.stringify([tasksArr]))
}


return (
  <div className="toDo">
    <h1 style={{ textAlign: "center" }}>To Do List</h1>
    <div className="form-container">
      <form className="centered-form">
      <h3>Add a task</h3>
        <label>
          <input
            type="text"
            placeholder="enter a new task here"
            name="input"
            onChange={handleChange}
            value={input}
          />
        </label>
        <button onClick={handleAdd}><IoIosAdd /></button>
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
                  name={currTask.id}
                  onChange={handleComplete}
                />
              ) : (
                <input
                  type="checkbox"
                  checked={false}
                  name={currTask.id}
                  onChange={handleComplete}
                />
              )}
              {currTask.complete === true ? (
                <TiDeleteOutline onClick={handleRemove} />
              ) : null}
              <li>
                {currTask.task} {currTask.complete}
              </li>
            </ul>
          );
        })}
  </div>
);
}

export default ToDoList


