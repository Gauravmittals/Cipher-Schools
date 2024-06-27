import { createContext,useState } from "react";
import {v4 as randomUUID} from "uuid";

const TaskContext= createContext();
const TASK_EDITABLE_FIELD_LIST =["title","Description"]

const TaskProvider=({children})=>{
    const [taskList, setTaskList]=useState([]);

    const addNewTask=(task)=>{
        setTaskList([...taskList, {...task,createdDate:new Date(), taskID: randomUUID()},]);

    };
    const deleteTask=(taskID)=>{
        setTaskList(taskList.filter((task)=>task.taskID!==taskID));

    };
    const editTask=(task)=>{
        let tempTaskList=[...taskList];
        for(let t of tempTaskList){
            if(t.taskID===task.taskID){
                TASK_EDITABLE_FIELD_LIST.forEach((field)=>(t[field]=task[field]));
        }
        setTaskList(taskList);


    }
};

    return(
        <TaskContext.Provider value={{taskList,addNewTask,deleteTask,editTask}}>
        {children}

        </TaskContext.Provider>
    );

};

export {TaskProvider};
export default TaskContext;


