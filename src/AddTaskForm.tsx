import { useState } from "react";
import React from "react"
import { IoIosAdd } from "react-icons/io";
import Slider from "./Slider";

interface Props {
  tasksArr: Task[];
  setTasksArr: React.Dispatch<React.SetStateAction<Task[]>>;
}

// React refers to the library 
// FC stands for functional component 
// <Props> represents props object component is expecting to recieve 

interface Task {
  id: number;
  task: string;
  complete: boolean;
  date: string;
  priorityLevel: string
}

const AddTaskForm: React.FC<Props> = ({ tasksArr, setTasksArr }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("Not Important");
  let [taskCount, setTaskCount] = useState(1)
  let date = new Date();
  let d = date.toString().slice(4, 15);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const taskToFind = tasksArr.find((element) => element.task === input);

    if (taskToFind) {
      setError("Task already exists");
    } else if(input.length > 55){
      setError("Task character count exceeded");
    } else if (!input) {
      setError("Must add a task");
    } else if (input) {
      let taskToAdd = {
        id: taskCount,
        task: input,
        complete: false,
        date: d,
        priorityLevel: priorityLevel,
      };
      setTasksArr((prev) => [...prev, taskToAdd]);
      localStorage.setItem("tasks", JSON.stringify([...tasksArr, taskToAdd]));
      setTaskCount(taskCount += 1)
      setError("");
      setInput("");
    } 
  };

  return (
    <div>
      <div data-testid="todo-list-container" className="form-container">
        <form className="centered-form">
          {tasksArr.length === 0 ? (
            <h2>
              Hello busy bee 🐝<br></br> add a task below
            </h2>
          ) : (
            <h2>Add a task below</h2>
          )}
          <label>
            <input
              type="text"
              data-testid="task-input"
              placeholder="enter a new task"
              name="input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </label>
          <Slider setPriorityLevel={setPriorityLevel} />
          <button data-testid="add-task-button" onClick={handleAdd}>
            <IoIosAdd className="add-icon" size={25} />
          </button>
          <h5 data-testid="error-message" style={{ color: "#BC1A1B" }}>{error}</h5>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
