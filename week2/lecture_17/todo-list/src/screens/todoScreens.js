import { useState } from "react";
import Task from "../components/Task";



// import { Component } from "react";

// class TodoScreen extends Component{
//     state={
//         taskCount:0,
//     };
//     render(){
//         return (
//             <div className="screen">
//                 <h1 className="ui heading center">To DO List</h1>
//                 <div>
//                     <button onClick={(e)=>{
//                         this.setState({
//                             ...this.state,
//                             taskCount:this.state.taskCount +1,
//                         });
//                         console.log(`Add Task Button was Clicked ${this.state.taskCount}` );
//                     }} className="ui secondary button"> 
//                         Add Task
//                     </button>
//                 </div>
//                 <p>No. of Task in the queue {this.state.taskCount}</p>
//             </div>

//         )
//     }
// }

const TodoScreen = () => {
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="screen">
            <h1 className="ui heading center">To DO List</h1>
            <div>
                <button onClick={(e) => {
                    setTaskList([...taskList,
                    {
                        title: "Go to Gym",
                        Description: "Good for muscle Grouth",
                    },
                    ]);
                    console.log(`Add Task Button was Clicked ${taskList.length}`);
                }} className="ui secondary button">
                    Add Task
                </button>
            </div>
            {taskList.map((task) => <Task></Task> )}
           
        </div>

    )
}

export default TodoScreen;