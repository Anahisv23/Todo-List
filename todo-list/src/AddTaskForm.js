import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DateBox from "./Date";

const AddTaskForm = ({ tasksArr, setTasksArr }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  let date = new Date();
  let d = date.toString().slice(4, 15);


  const handleAdd = (e) => {
    e.preventDefault();
    const taskToFind = tasksArr.find((element) => element.task === input)

    if(taskToFind) {
        setError("Task already exists")
    } else if (input) {
      let taskNumber = tasksArr.length + 1;
      let taskToAdd = { id: taskNumber, task: input, complete: false, date: d };
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
          <h2>Hello busy bee 🐝<br></br> add a task below</h2>
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
          <button onClick={handleAdd}>
            <IoIosAdd className="add-icon"size={25} />
          </button>
          <h5>{error}</h5>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
