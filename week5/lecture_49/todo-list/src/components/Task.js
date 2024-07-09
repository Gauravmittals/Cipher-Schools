import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";
const Task = ({ task: inComingTask }) => {
    const { title, Description, createdDate, taskID }=inComingTask;
    const { deleteTask, editTask } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(inComingTask);
    let handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    if (isEditing) {
        return (

            <div className="card">
                <div className="content">
                    <div className="ui form">

                        {/* <div className="header">
                        {title}
                    </div> */}
                        <div className="field">
                            <label>title</label>
                            <input type="text" spellCheck={false} name="title" data-ms-editor={true} placeholder="Task Title" value={task.title} onChange={handleInputChange} />
                        </div>
                        <div className="meta">
                            {formatDate(createdDate)}
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea placeholder="Task Description" spellCheck={false} data-ms-editor={true} name="Description" value={task.Description} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() =>{ editTask(task); setIsEditing(false);}}>
                            Save
                        </div>
                        <div className="ui basic red button" onClick={() => setIsEditing(false)}>Cancel</div>
                    </div>
                </div>
            </div>
        )

    }
    else {
        return (

            <div className="card">
                <div className="content">

                    <div className="header">
                        {title}
                    </div>
                    <div className="meta">
                        {formatDate(createdDate)}
                    </div>
                    <div className="description">
                        {Description}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() => setIsEditing(true)}>Edit</div>
                        <div className="ui basic red button" onClick={() => deleteTask(taskID)}>Delete</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Task;