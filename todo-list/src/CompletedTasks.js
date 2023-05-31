
const CompletedTasks = ({ completedTasksArr }) => {
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Past Tasks</h3>
            {completedTasksArr.map((currTask) => (
                <div className="past-tasks">
                    <p key={currTask.id}>{currTask.date} -- {currTask.task}</p>
                </div>
            ))}
        </div>
    )
}

export default CompletedTasks