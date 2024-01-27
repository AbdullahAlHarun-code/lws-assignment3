import { useContext, useState } from "react";
import { TasksContext } from "../context";

export default function SingleTaskAction({ currentTask }) {
  const { taskControll, modelControll, setTask } = useContext(TasksContext);

  function handleEditTask(currentTask) {
    modelControll({
      type: "EDIT_TASK_MODEL_OPEN",
      payload: {
        visible: true,
        add_mode: false,
      },
    });
    taskControll({
      type: "UPDATE_CURRENT_TASK",
      payload: {
        task: currentTask,
      },
    });
    setTask(currentTask);
  }
  function showAlertModel() {
    modelControll({
      type: "ALERT_MODEL_OPEN",
      payload: {
        visible: true,
        all_delete_mode: false,
      },
    });
    setTask(currentTask);
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <button onClick={showAlertModel} className="text-red-500">
        Delete
      </button>
      <button
        onClick={() => handleEditTask(currentTask)}
        className="text-blue-500"
      >
        Edit
      </button>
    </div>
  );
}
