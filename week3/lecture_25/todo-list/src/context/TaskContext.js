import { createContext,useState } from "react";

const TaskContext= createContext();

const TaskProvider=({Children})=>{
    const [tasklist,setTaskList]=useState([]);

    const addNewTask=(task)=>{
        setTaskList([...tasklist, {...task,createDate:new Date()}]);

    };
    return(
        <TaskContext.Provider value={{tasklist,addNewTask}}>
        {Children}

        </TaskContext.Provider>
    )

};

export {TaskProvider};
export default TaskContext;