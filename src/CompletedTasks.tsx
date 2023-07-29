import { CiSquareRemove } from "react-icons/ci";
import React from "react"

interface Props {
  completedTasksArr: CompletedTask[];
  setCompletedArr: React.Dispatch<React.SetStateAction<CompletedTask[]>>;
}

interface CompletedTask {
  id: number;
  task: string;
  complete: boolean;
  date: string;
  priorityLevel: string;
}

const CompletedTasks: React.FC<Props> = ({ completedTasksArr, setCompletedArr }) => {
  return (
    <div>
      <h3 className="center-text">Past Tasks</h3>
      {completedTasksArr.length === 0 ? (
        <h4 className="center-text">No past tasks 😕</h4>
      ) : (
        completedTasksArr.map((currTask) => (
          <div className="past-tasks">
            <p style={{paddingRight: "10px"}} key={currTask.id}>
              {currTask.date} - {currTask.task}
            </p>
            <CiSquareRemove
              className="item"
              onClick={() => {
                let newArr = completedTasksArr.filter((task) => {
                  return task.id !== currTask.id;
                });
                setCompletedArr(newArr);
                localStorage.setItem("completedTasks", JSON.stringify(newArr));
              }}
              size={30}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CompletedTasks;
