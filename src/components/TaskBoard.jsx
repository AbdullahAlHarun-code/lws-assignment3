import { useState } from "react";
import TasksList from "./TasksList";
import TasksManage from "./TasksManage";
import { TasksContext } from "../context";
import AddTaskModal from "./AddTaskModel";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "New task",
    description: "New task New task",
    priority: "High",
    tags: ["python", "javascript", "Css"],
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModel, setShowAddModel] = useState(false);
  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks, showAddModel, setShowAddModel }}>
        <section className="mb-20" id="tasks">
            {showAddModel && <AddTaskModal /> }
          <div className="container">
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <TasksManage />

              <TasksList />
            </div>
          </div>
        </section>
      </TasksContext.Provider>
    </>
  );
}
