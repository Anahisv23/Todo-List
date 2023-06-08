import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import Slider from "./Slider";

const AddTaskForm = ({ tasksArr, setTasksArr }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("Not Important");
  let [taskCount, setTaskCount] = useState(0)
  let date = new Date();
  let d = date.toString().slice(4, 15);

  useEffect(() => {
    if (tasksArr.length === 0) {
      setTaskCount(0)
    }
  }, [tasksArr])


  const handleAdd = (e) => {
    e.preventDefault();
    const taskToFind = tasksArr.find((element) => element.task === input);

    if (taskToFind) {
      setError("Task already exists");
    } else if (input) {
      setTaskCount(taskCount += 1)
      let taskToAdd = {
        id: taskCount,
        task: input,
        complete: false,
        date: d,
        priorityLevel: priorityLevel,
      };
      setTasksArr((prev) => [...prev, taskToAdd]);
      localStorage.setItem("tasks", JSON.stringify([...tasksArr, taskToAdd]));
      setError("");
      setInput("");
    } else if (!input) {
      setError("Must add a task");
    }
  };

  return (
    <div>
      <div className="form-container">
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
              placeholder="enter a new task"
              name="input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </label>
          <Slider setPriorityLevel={setPriorityLevel} />
          <button onClick={handleAdd}>
            <IoIosAdd className="add-icon" size={25} />
          </button>
          <h5 style={{ color: "#BC1A1B" }}>{error}</h5>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
