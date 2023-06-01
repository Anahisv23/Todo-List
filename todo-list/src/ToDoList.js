import React, { useState, useEffect } from "react";
import { CiSquareRemove } from "react-icons/ci";
import CompletedTasks from "./CompletedTasks";
import AddTaskForm from "./AddTaskForm";

const ToDoList = () => {
  const timeLimit = 24 * 60 * 60 * 1000;
  const [isChecked, setIsChecked] = useState(false);
  const [completedTasksArr, setCompletedArr] = useState(
    JSON.parse(localStorage.getItem("completedTasks")) || []
  );
  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Set a timeout to delete the data after the time limit has passed
  setTimeout(function () {
    localStorage.removeItem("completedTasks");
  }, timeLimit);

  // useEffect sets local storage data to tasksArr local state if we have data in local storage
  // if we do not have data we setTasksArr to an empty arr

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("tasks"));
    const completedArray = JSON.parse(localStorage.getItem("completedTasks"));
    if (storedArray) {
      setTasksArr(storedArray);
    }
    if (completedArray) {
      setCompletedArr(completedArray);
    }
  }, []);

  const handleRemove = () => {
    const completedTaskToFind = tasksArr.find(
      (element) => element.complete === true
    );
    setCompletedArr((prev) => [...prev, completedTaskToFind]);
    localStorage.setItem(
      "completedTasks",
      JSON.stringify([...completedTasksArr, completedTaskToFind])
    );

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
      <h3 style={{ textAlign: "center" }}>Current Tasks</h3>

      {tasksArr.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>Nothing to do 🥳</h4>
      ) : (
        tasksArr.sort((a, b) => (b["priorityLevel"] - a["priorityLevel"])).map((currTask) => {
          return (
            <div className="flex-container">
              <p className={currTask.priorityLevel === 3 ? ("very-important") : (currTask.priorityLevel === 2) ? ("somewhat-important") : ("not-that-important")}>{currTask.task}</p>
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
        })
      )}

      <CompletedTasks
        completedTasksArr={completedTasksArr}
        setCompletedArr={setCompletedArr}
      />
    </div>
  );
};

export default ToDoList;
