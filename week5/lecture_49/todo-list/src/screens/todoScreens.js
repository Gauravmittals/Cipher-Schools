import { useContext } from "react";
import Task from "../components/Task";

import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";




const TodoScreen = () => {
    const {taskList} = useContext(TaskContext);
    const navigate=useNavigate();
    
    return (
        <>
        <div className="screen">
            <h1 className="ui heading center">To DO List</h1>
            <div>
                <button onClick={(e) => {
                    navigate("/AddTask");
                }} className="ui secondary button">
                    Add Task
                </button>
            </div>
            <section>
            <div className="ui cards">
                {taskList.map((task) => <Task task={task} key={task.taskID}/> )}
            </div>
            
            </section>
            
            {/* <AddTask onSubmit={addNewTask}  /> */}
        </div>
        
        </>

    )
}

export default TodoScreen;