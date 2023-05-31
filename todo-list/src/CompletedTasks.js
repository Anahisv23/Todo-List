import { CiSquareRemove } from "react-icons/ci";

const CompletedTasks = ({ completedTasksArr, setCompletedArr }) => {
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Past Tasks</h3>
            {completedTasksArr.length === 0 ? (<h4 style={{ textAlign: "center" }}>No past tasks 😕</h4>) : (
                completedTasksArr.map((currTask) => (
                    <div className="past-tasks">
                        <p key={currTask.id}>
                            {currTask.date} -- {currTask.task}
                        </p>
                        <CiSquareRemove className="item"
                            onClick={() => {
                                let newArr = completedTasksArr.filter((task) => {
                                    return task.id !== currTask.id;
                                });
                                setCompletedArr(newArr);
                                localStorage.setItem(
                                    "completedTasks",
                                    JSON.stringify(newArr)
                                  );
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
