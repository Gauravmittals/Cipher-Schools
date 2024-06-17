import { useState } from "react";

const AddTask = () => {

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
    }
    return (
        <>

        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
            <form onSubmit={onFormSumbit}>
             <div className="field">
                <label>title</label>
                <input type="text" spellCheck={false}  name=" title" data-ms-editor={true} placeholder="Task Title" onChange={handleInputChange}  />
            </div>
            <div className="field">
                <label>Description</label>
                <textarea placeholder="Task Description" spellCheck={false} data-ms-editor={true} name="Description" onChange={handleInputChange}></textarea>
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