import { useState } from "react";


const AddTask = ({onSubmit}) => {

    const [task,setTask]= useState({
        title:"",
        Description:"",
    });
    let handleInputChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };
    let onFormSumbit=(e)=>{
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }
    return (
        <>

        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
            <form onSubmit={onFormSumbit}>
             <div className="field">
                <label>title</label>
                <input type="text" spellCheck={false}  name="title" data-ms-editor={true} placeholder="Task Title" value={task.title}  onChange={handleInputChange}  />
            </div>
            <div className="field">
                <label>Description</label>
                <textarea placeholder="Task Description" spellCheck={false} data-ms-editor={true} name="Description" value={task.Description} onChange={handleInputChange}></textarea>
            </div>
           
            <button className="ui primary button" type="submit">
                Submit
            </button>
            </form>

        </div>
        </>

    )
}

export default AddTask;