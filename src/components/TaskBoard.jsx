import { useReducer, useState } from "react";
import TasksList from "./TasksList";
import TasksManage from "./TasksManage";
import { TasksContext } from "../context";
import AddTaskModal from "./AddTaskModel";
import AlertMessage from "./AlertMessage";
import { ModelReducer, initialModel } from "../reducers/modelRedecer";
import { TaskReducer, initialTask } from "../reducers/taskReducer";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "New task",
    description: "New task New task",
    priority: "High",
    tags: ["python", "javascript", "Css"],
    isFavourite: true,
  };
  const blankTask = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    priority: "",
    tags: [],
    isFavourite: true,
  };
  const [task, setTask] = useState(blankTask);
  const [tasks, setTasks] = useState([defaultTask]);
  const [filteredTasks , setFilteredTasks ] = useState([]);
  const [showAddModel, setShowAddModel] = useState(false);
  const [showAlertModel, setShowAlertModel] = useState(false);
  //-----------------------------
  const [isAdd, setIsAdd] = useState(false);
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // ------------
  const [model, modelControll] = useReducer(ModelReducer, initialModel)
  const [taskObj, taskControll] = useReducer(TaskReducer, initialTask)
  return (
    <>
      <TasksContext.Provider value={{ 
        model, modelControll,
        taskObj, taskControll,
        filteredTasks , setFilteredTasks,
        searchTerm, setSearchTerm, 
        blankTask, 
        task, setTask, }}>
        <section className="mb-20" id="tasks">
            {model.showAddEditModel && <AddTaskModal /> }
            {model.showAlertModel && <AlertMessage /> }
          <div className="container">
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <TasksManage defaultTask={task}/>

              <TasksList />
            </div>
          </div>
        </section>
      </TasksContext.Provider>
    </>
  );
}
