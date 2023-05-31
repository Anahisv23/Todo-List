import React, { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSquareRemove } from "react-icons/ci";
import AddTaskForm from "./AddTaskForm";

const ToDoList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect sets local storage data to tasksArr local state if we have data in local storage
  // if we do not have data we setTasksArr to an empty arr

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("tasks"));
    if (storedArray) {
      setTasksArr(storedArray);
    }
  }, []);

  const handleRemove = () => {
    const newArr = tasksArr.filter((curr) => {
      return curr.complete === false;
    });
    setTasksArr(newArr);
    localStorage.setItem("tasks", JSON.stringify(newArr));
  };

  const handleComplete = (e) => {
    tasksArr.map((currTask) => {
      if (currTask.id === parseInt(e.target.name)) {
        currTask.complete = !currTask.complete;
        setIsChecked(!isChecked);
      }
      return currTask;
    });

    // update the local state array
    setTasksArr(tasksArr);
    // update session storage data
    localStorage.setItem("tasks", JSON.stringify([tasksArr]));
  };

  return (
    <div className="toDo">
      <AddTaskForm tasksArr={tasksArr} setTasksArr={setTasksArr} />
      <h3 style={{ textAlign: "center" }}>Tasks</h3>
      <hr></hr>
      {tasksArr.map((currTask) => {
        return (
          <div className="flex-container">
            <p>{currTask.task}</p>
            {currTask.complete !== true ? (
              <>
                <input
                  type="checkbox"
                  checked={false}
                  name={currTask.id}
                  className="checkbox"
                  onChange={handleComplete}
                />
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={true}
                  name={currTask.id}
                  className="checkbox"
                  onChange={handleComplete}
                />
                <CiSquareRemove 
                  className="item"
                  size={30}
                  onClick={handleRemove}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
