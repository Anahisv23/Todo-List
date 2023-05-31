import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DateBox from "./Date";

const AddTaskForm = ({ tasksArr, setTasksArr }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");


//   const numbers = [1, 2, 3, 4, 5];

// const evenNumber = numbers.find((element) => element % 2 === 0);
// console.log(evenNumber); // Output: 2

  const handleAdd = (e) => {
    e.preventDefault();
    const taskToFind = tasksArr.find((element) => element.task === input)

    console.log("task to find", taskToFind)
    if(taskToFind) {
        setError("Task already exists")
    } else if (input) {
      let taskNumber = tasksArr.length + 1;
      let taskToAdd = { id: taskNumber, task: input, complete: false };
      setTasksArr((prev) => [...prev, taskToAdd]);
      localStorage.setItem("tasks", JSON.stringify([...tasksArr, taskToAdd]));
      setError("");
      setInput("");
    } else if (!input) {
      setError("Must add task");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <DateBox />
      <div className="form-container">
        <form className="centered-form">
          <h3>Add a task</h3>
          <label>
            <input
              type="text"
              placeholder="enter a new task"
              name="input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </label>
          <h5>{error}</h5>
          <button onClick={handleAdd}>
            <IoIosAdd size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
