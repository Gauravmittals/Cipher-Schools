// import { Component } from "react";
import AddTask from "./components/AddTask";
import TodoScreen from "./screens/todoScreens";
// import {createBrowserRouter, RouterProvider} from "react-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:"/",
    element:<TodoScreen/>
  },
  {
    path:"/AddTask",
    element:<AddTask/>

  },
]);
const App=()=>{
  const [tasks,setTasks]=useState([])
  return <RouterProvider router={router}/>
}

export default App;