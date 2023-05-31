import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DateBox from "./Date";

const AddTaskForm = ({ tasksArr, setTasksArr }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    console.log("TARGET", e.target.value)
    console.log("input", input)
    if (input) {
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
