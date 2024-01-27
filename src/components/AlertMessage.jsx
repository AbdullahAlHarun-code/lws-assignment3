import { useContext, useState } from "react";
import { TasksContext } from "../context";

export default function AlertMessage() {
  const {
    model,
    modelControll,
    taskControll,
    
  } = useContext(TasksContext);
  const { blankTask, task, setTask } =
    useContext(TasksContext);
  function closeModel(e) {
    e.preventDefault();
    modelControll({
      type: "ALERT_MODEL_CLOSE",
      payload: {
        visible: false,
        all_delete_mode: false,
      },
    });
    //setIsDeleteAll(false)
    setTask(blankTask);
    console.log(task.title);
  }
  function handleDeleteTask(e) {
    e.preventDefault();
    taskControll({
      type: "DELETE_TASK",
      payload: {
        task:task
      },
    })
    modelControll({
      type: "ALERT_MODEL_CLOSE",
      payload: {
        visible: false,
        all_delete_mode: false,
      },
    });
    setTask(blankTask);
  }
  function handleDeleteAllClick(e) {
    e.preventDefault();
    taskControll({
      type: "DELETE_ALL_TASKS",
      
    })
    modelControll({
      type: "ALERT_MODEL_CLOSE",
      payload: {
        visible: false,
        all_delete_mode: false,
      },
    });
    setTask(blankTask);
  }

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-1/2 max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/2 left-1/4">
        <div className="mt-16 flex justify-between lg:mt-20">
          <p className="">
            {" "}
            Are you sure you want to{" "}
            {model.isDeleteAll ? "Delete all" : "Delete this"} task?
          </p>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={closeModel}
          >
            No
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={
              model.isDeleteAll ? handleDeleteAllClick : handleDeleteTask
            }
          >
            Yes
          </button>
        </div>
      </form>
    </>
  );
}
