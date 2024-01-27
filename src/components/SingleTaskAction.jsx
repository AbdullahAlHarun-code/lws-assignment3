import { useContext, useState } from "react";
import { TasksContext } from "../context";

export default function SingleTaskAction({ currentTask }) {
  const { setShowAlertModel, showAddModel, setShowAddModel } = useContext(TasksContext);
  const { tasks, setTasks, task, setTask } = useContext(TasksContext);
  const {isAdd, setIsAdd} = useContext(TasksContext)
  function handleEditTask(currentTask) {
    //setTask(...task,currentTask);
    setTask(currentTask)
    setShowAddModel(true);
    setIsAdd(false)
    console.log(currentTask.title);
  }
  function showAlertModel(){
    setShowAlertModel(true)
    setTask(currentTask)
  }
  
  

  
  return (
    <div className="flex items-center justify-center space-x-3">
      <button onClick={showAlertModel} className="text-red-500">Delete</button>
      <button
        onClick={() => handleEditTask(currentTask)}
        className="text-blue-500"
      >
        Edit
      </button>
    </div>
  );
}
