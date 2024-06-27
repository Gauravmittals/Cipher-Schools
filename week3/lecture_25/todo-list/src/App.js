// import { Component } from "react";

import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";
import TodoScreen from "./screens/todoScreens";
// import {createBrowserRouter, RouterProvider} from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoScreen />
  },
  {
    path: "/AddTask",
    element: <AddTask />

  },
]);
const App = () => {

  return ( 
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>);
};

export default App;