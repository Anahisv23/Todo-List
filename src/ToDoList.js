import React, { useState, useEffect } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import CompletedTasks from "./CompletedTasks";
import AddTaskForm from "./AddTaskForm";
import DateBox from "./Date";
import RandomActivityGenerator from "./RandomActivityGenerator";

const ToDoList = () => {
  const timeLimit = 24 * 60 * 60 * 1000;
  const [isChecked, setIsChecked] = useState(false);
  const [completedTasksArr, setCompletedArr] = useState(
    JSON.parse(localStorage.getItem("completedTasks")) || []
  );
  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  setTimeout(function () {
    localStorage.removeItem("completedTasks");
  }, timeLimit);

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

    setTasksArr(tasksArr);

    localStorage.setItem("tasks", JSON.stringify([tasksArr]));
  };

  return (
    <div className="toDo">
      <h1 className="center-text">
        Taskify <GoTasklist className="check-icon" />
      </h1>
      <DateBox />
      <AddTaskForm tasksArr={tasksArr} setTasksArr={setTasksArr} />

      <h3 className="center-text">Current Tasks</h3>
      {tasksArr.length === 0 ? (
        <h4 className="center-text">Nothing to do 🥳</h4>
      ) : (
        tasksArr
          .sort((a, b) => b["priorityLevel"] - a["priorityLevel"])
          .map((currTask) => {
            return (
              <div className="flex-container">
                <p
                  className={
                    currTask.priorityLevel === 3
                      ? "very-important"
                      : currTask.priorityLevel === 2
                      ? "somewhat-important"
                      : "not-that-important"
                  }
                >
                  {currTask.task}
                </p>
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
      <br></br>
      {tasksArr.length === 0 ? <RandomActivityGenerator /> : null}
      <br></br>
      <footer className="center-text">
        © 2023 To Do List <br></br>Anahis Valenzuela
      </footer>
    </div>
  );
};

export default ToDoList;
