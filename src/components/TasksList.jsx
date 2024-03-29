import { useContext } from "react";
import SingleTask from "./SingleTask";
import { TasksContext } from "../context";

export default function TasksList() {
  const { taskObj} = useContext(TasksContext);

  return (
    <>
      <div className="overflow-auto">
      {
        taskObj.allTasks.length == 0 ? (
          <p className="text-center text-red-500 text-2xl">Empty Task list!</p>
        ) : (
          <table className="table-fixed overflow-auto xl:w-full">
            <thead>
              <tr>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                  {" "}
                  Title{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                  {" "}
                  Description{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                  {" "}
                  Tags{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  {" "}
                  Priority{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  {" "}
                  Options{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {taskObj.allTasks.map((task) => (
                <SingleTask key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        )
      }

       
      </div>
    </>
  );
}
